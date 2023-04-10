'use client'
import Link from 'next/link'
import React from 'react'

const DownloadCv = ({link}) => {
  return (
    <Link href={link} className='bg-red-500 text-white m-[5px] py-[10px] px-[30px] rounded-3xl border border-white shadow-2xl'>Download CV</Link>
  )
}

export default DownloadCv
