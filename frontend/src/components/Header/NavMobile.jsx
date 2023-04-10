import { navigation } from '@/services/navigation'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import {CgClose, CgMenuRight} from 'react-icons/cg'
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const circleVariants = {
    hidden:{
      scale:0
    },
    visible:{
      scale:180,
      transition:{
        type: 'spring',
        stiffness: 160,
        daming: 60
      }
    }
  }
  const ulVariants ={
    hidden: {
      opacity: 0,
    },
    visible:{
      opacity: 1,
      transition :{
        delay:0.1
      }
    }
  }
  return (
    <nav className='relative'>
      <div onClick={()=>setIsOpen(true)}
      className='cursor-pointer text-white'>
        <CgMenuRight className='w-8 h-8'/>
      </div>
      <motion.div
      variants={circleVariants}
      initial='hidden'
      animate={isOpen ? 'visible' : 'hidden'}
      className='w-4 h-4 rounded-full bg-dark fixed top-0 right-0'
      >
      </motion.div>
      <motion.ul
      variants={ulVariants}
      initial='hidden'
      animate={isOpen ? 'visible' : ''}
      className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full
      flex flex-col justify-center items-center transition-all duration-300 overflow-hidden` }
      >
        <div onClick={()=>setIsOpen(false)} className='cursor-pointer absolute top-8 right-8'>
          <CgClose className='w-8 h-8'/>
        </div>
        {
          navigation.map((item, index)=>{
            return(
              <li key={index} className='mb-8'>
                <Link 
                  onClick={()=>setIsOpen(false)}
                  activeClass='!text-red-500'
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className='text-xl cursor-pointer capitalize'
                >{item.name}</Link>
              </li>
            )
          })
        }
      </motion.ul>
    </nav>
  )
}

export default NavMobile
