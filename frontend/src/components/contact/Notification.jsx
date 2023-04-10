import React from 'react'
import {CgClose} from 'react-icons/cg'

const Notification = ({setIsActive, message, status, isActive}) => {
  return (
    <div className={`fixed ${status==='error'? 'bg-red-500' : 'bg-green-500'} ${isActive ? "left-0" : '-left-[3000px]'}  transition-all flex justify-between items-center text-white p-2 z-[100] rounded   !top-[18px]  w-[300px]`}>
       <p>{message}</p>
       <button onClick={()=>setIsActive(false)}><CgClose size={30}/></button>
    </div>
  )
}

export default Notification
