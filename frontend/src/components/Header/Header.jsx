'use client'
import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import NavMobile from './NavMobile'

const Header = () => {
    
    const [bg, setBg] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll',() => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })
    
    return (
        <header className={`${bg ? 'bg-dark h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div className='container mx-8 justify-end md:justify-center md:mx-auto w-full flex items-center'>
                <div className='hidden md:block'>
                    <Nav/>
                </div>
                <div className='md:hidden'>
                    <NavMobile/>
                </div>
            </div>
        </header>
    )
}



export default Header
