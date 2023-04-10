'use client'
import Image from 'next/image'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Home = ({about}) => {
  useEffect(()=>{
    Aos.init()
  })
  if (about) 
  return (
    <section className='h-screen w-full relative bg-black' id='home'>
        <Image alt='bg' className='object-cover w-full h-full opacity-20' width={1200} height={600} src={'/comp.jpg'}/>
        <div className=' absolute top-0 h-full w-full flex items-center justify-center text-center'>
            <div>
                <p data-aos="fade-right" className='text-5xl text-white font-light'>Welcome</p>
                <h2 data-aos="fade-left" className='text-4xl my-5 text-red-600'>I`m {about.name} {about.surname}</h2>
                <p data-aos="fade-right" className='text-xl text-red-700 bg-red-200 p-3 rounded-3xl'>{about.job}</p>
            </div>
        </div>
    </section>
  )
}

export default Home
