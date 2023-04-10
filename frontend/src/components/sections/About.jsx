import Image from 'next/image'
import Skills from '../about/Skills'
import Education from '../about/Education'
import DownloadCv from '../about/DownloadCv'
import Experience from '../about/Experience'

const About = ({about,skills,experience,education}) => {
  return (
    <section id='about' className='py-[70px] px-[16px] text-[16px] container mx-auto'>
        {about &&<div  data-aos='fade-up' className='grid md:grid-cols-2'>
          <Image alt={about.name} width={250} height={250} className='rounded-full h-[250px] object-cover mx-auto my-auto' src={about.photo}/>
          <div className='px-[15px]'>
              <h2 className='text-[32px] mb-[8px]'>{about.name} {about.surname}</h2>
              <h3 className='text-red-500 '>{about.job}</h3>
              <p className='my-[16px]'>{about.description}</p>
              <ul className='mb-[16px]'>
                  <li className='flex'><div className='mr-4 flex items-center flex-col'><div className='w-[12px] h-[12px] rounded-full border-2 border-red-500'></div></div></li>
                  <li className='flex'><div className='mr-4 flex items-center flex-col'><div className='w-[1px] h-[15px] bg-black'></div><div className='w-[12px] h-[12px] rounded-full border-2 border-red-500'></div></div><span className='font-extrabold mr-2'>From: </span><span>{about.country}</span></li>
                  <li className='flex'><div className='mr-4 flex items-center flex-col'><div className='w-[1px] h-[15px] bg-black'></div><div className='w-[12px] h-[12px] rounded-full border-2 border-red-500'></div></div><span className='font-extrabold mr-2'>Lives: </span><span>{about.lives}</span></li>
                  <li className='flex'><div className='mr-4 flex items-center flex-col'><div className='w-[1px] h-[15px] bg-black'></div><div className='w-[12px] h-[12px] rounded-full border-2 border-red-500'></div></div><span className='font-extrabold mr-2'>Age: </span><span>{about.age}</span></li>
                  <li className='flex'><div className='mr-4 flex items-center flex-col'><div className='w-[1px] h-[15px] bg-black'></div><div className='w-[12px] h-[12px] rounded-full border-2 border-red-500'></div></div><span className='font-extrabold mr-2'>Gender: </span><span>{about.gender}</span></li>
              </ul>
            <DownloadCv link={about.cv}/>
          </div>
        </div>}
        <Skills skills={skills}/>
        <div className='grid md:grid-cols-2 md:gap-2'>
           <Experience list={experience}/>
           <Education list={education}/>
        </div>    
        </section>
  )
}

export default About
