'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Portfolio =({data,portfolios}) => {
    const [categories,setCategories] = useState([])
    const [projects, setProjects] = useState([])
    const [item, setItem] = useState('all');
    const [active, setActive] = useState(0)

    useEffect(()=>{
        if (item === 'all') {
            setProjects(portfolios)
        } else {
            const newProjects = portfolios.filter((port)=>port.category===item.title)            
            setProjects(newProjects)
        }
            setCategories(data)

    },[item])
    const handleClick = (item, index) =>{
        setItem(item)
        setActive(index)
    }
    if (portfolios.length>0) 
  return (
    <section id='portfolio' className='py-[70px] px-[16px] bg-dark'>
        <div className="container mx-auto px-[15px]">
            <h4 className='text-[12px] text-center text-white'>Portfolio</h4>
            <h2 className='mb-[8px] text-[40px] text-center text-white'>See my work</h2>
        </div>
        <div className='flex flex-wrap gap-[12px] justify-center'>
                <div onClick={()=>handleClick('all',0)} className={`capitalize border-2 rounded-2xl border-red-500 py-[5px] px-[16px]  hover:bg-red-500  hover:text-white transition-colors cursor-pointer
                ${active===0 ? 'bg-red-500 text-white scale-110' :'text-red-500 '}`}>All</div>
            {categories.map((item, index)=>(
                <div key={index} onClick={()=>handleClick(item,index+1)} className={`capitalize border-2 rounded-2xl border-red-500 py-[5px] px-[16px]  hover:bg-red-500  hover:text-white transition-colors cursor-pointer
                ${active===index+1 ? 'bg-red-500 text-white scale-110' :'text-red-500 '}`}>{item.title}</div>
                
            ))}
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-[16px] container mx-auto'>
            {projects.map((item, key)=>{
                return(
                    !item.link?
                        <div data-aos='fade-up' className='cursor-pointer my-[16px] px-[16px] rounded !overflow-hidden'>
                        <div className=' rounded !overflow-hidden w-full '>
                            <Image alt={item.title} width={1000} height={1000} className='w-full h-[235px] object-cover' src={item.image}/>
                            <div className=' py-[12px] px-[16px]  w-full bg-gray-800'>
                                <h2 className='text-[20px]  capitalize text-red-500'>{item.title}</h2>
                                <ul className='flex'> 
                                    {item.tags.map((tag, index)=>{
                                        return(
                                            <li className={`${(!index==item.tags.length-1) || (!index==1) ? '' : 'ml-2'} text-[14px]  capitalize text-white`} key={index}>{tag.title}{!index==item.tags.length-1 && ','}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div> :
                    <Link  data-aos='fade-up' key={key} href={item.link}>
                    <div className='cursor-pointer my-[16px] px-[16px] rounded !overflow-hidden'>
                        <div className=' rounded !overflow-hidden w-full '>
                            <Image alt={item.title} width={1000} height={1000} className='w-full h-[235px] object-cover' src={item.image}/>
                            <div className=' py-[12px] px-[16px]  w-full bg-gray-800'>
                                <h2 className='text-[20px]  capitalize text-red-500'>{item.title}</h2>
                                <ul className='flex'> 
                                    {item.tags.map((tag, index)=>{
                                        return(
                                            <li className={`${(!index==item.tags.length-1) || (!index==1) ? '' : 'ml-2'} text-[14px]  capitalize text-white`} key={index}>{tag.title}{!index==item.tags.length-1 && ','}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>  
                </Link>
            )})}
        </div>
    </section>
  )
}

export default Portfolio