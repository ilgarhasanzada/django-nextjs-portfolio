const Education = ({list}) => {
if(list.length>0)
  return (
    <div className='pt-[48px] px-[15px]'>
        <h2 className='text-[40px] mb-[8px] capitalize'>Education</h2>
            {
                list.map((item, index)=>(
                    <div  data-aos='fade-up' key={index} className='mt-[20px] relative pl-[30px] border-l-2 '>
                        <div style={{borderTopLeftRadius:'25px',borderBottomLeftRadius:'25px',borderBottomRightRadius:'50px'}} className={`${index%2===0 ? 'bg-red-500': 'bg-black'} text-white py-[6px] px-[20px] w-[180px]`}>{new Date(item.start_year).getFullYear()}/{new Date(item.start_year).getMonth()} - {item.graduate_year ? new Date(item.graduate_year).getFullYear() + '/' + new Date(item.graduate_year).getMonth() : "Currently"}</div>
                        <div className='mt-[8px] p-[20px] bg-gray-300 rounded'>
                            <h3>{item.faculty}</h3>
                            <h3 className='text-red-500 pt-[5px] pb-[10px]'>{item.university}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className={`${index===0 ? 'border-red-500  border-2' : ''} absolute flex items-center justify-center w-[20px] h-[20px] -left-[11px] -top-5 rounded-full`}>
                            <div className={`w-[12px] h-[12px] ${index===0 ? 'bg-red-500' : 'bg-black'} rounded-full `}></div>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default Education
