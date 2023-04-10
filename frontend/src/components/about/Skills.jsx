const Skills = ({skills}) => {
if (skills.length>0) 
  return (
   <div  data-aos='fade-up' className='mt-[3rem] mx-[15px]'>
    <h2 className='text-center text-[40px]'>My Skills</h2>
    <ul className='grid grid-cols-3 lg:mx-[300px] md:grid-cols-5 gap-2 mt-3'>
        {
            skills.map((skill, index)=>(
                <li key={index} className='relative bg-red-500 font-bold border-2 cursor-pointer duration-500 transition-colors text-center text-white py-3 rounded-2xl hover:border-red-500 hover:bg-white hover:text-red-500 '> 
                    {skill.title}
                </li>
            ))
        }
    </ul>
   </div>
  )
}

export default Skills
