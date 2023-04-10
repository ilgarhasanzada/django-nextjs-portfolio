'use client'
import { sendMessage } from "@/api"
import { useState } from "react"
import Notification from "../contact/Notification"

const Contact = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [status, setStatus] = useState('')
    const [statusMessage, setStatusMessage] = useState('')

    const reset =() => {
        setName('')
        setSubject('')
        setEmail('')
        setMessage('')
    }
    function notificationHandle(status, message){
            setIsActive(false)
            setStatus(status)
            setStatusMessage(message)
            setIsActive(true)
    }
    const submitHandler = () =>{
        if (!name || !subject || !email || !message) {
            notificationHandle('error', 'Please fill in the blank inputs !!!')
            return
        }
        if (!email.includes("@")) {
            notificationHandle('error', 'Email is not correct !!!')
            return
        }
        const data = {
            name: name,
            subject: subject,
            email: email,
            message: message
        }
        sendMessage('contact/',data)
        reset()
        notificationHandle('success', 'Message sent successfully !!!')

    }
    return (
    <section id='contact' className='px-[31px] py-[70px] container mx-auto lg:px-[300px]'>
        <h2 data-aos='fade-up' className='text-[40px]'>Contact</h2>
        <input  data-aos='fade-up' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your Name' className='border border-dark text-dark mt-[30px] py-[10px] px-[12px] w-full rounded' />
        <div data-aos='fade-up' className='grid grid-cols-2 gap-[10px]'>
            <input required value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='Email Address' className='border border-dark text-dark mt-[8px] py-[10px] px-[12px] w-full rounded' />
            <input value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" placeholder='Subject' className='border border-dark text-dark mt-[8px] py-[10px] px-[12px] w-full rounded' />
        </div>
        <textarea data-aos='fade-up' value={message} onChange={(e)=>setMessage(e.target.value)} className='border border-dark mt-[8px] rounded w-full  py-[10px] px-[12px]' name="" id=""  rows="6" placeholder='Enter message here...'></textarea>
        <button data-aos='fade-up' onClick={()=>submitHandler()} className='bg-red-500 cursor-pointer border-2 hover:border-red-500 hover:bg-white hover:text-red-500 transition-colors text-white w-full mt-[16px] py-[10px] rounded'>Send</button>
        
        <Notification status={status} message={statusMessage} isActive={isActive} setIsActive={setIsActive} />
        
    </section>
  )
}

export default Contact
