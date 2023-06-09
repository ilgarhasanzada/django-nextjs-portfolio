import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <Image alt='bg' className='fixed w-screen h-screen top-0 left-0 opacity-10 -z-40 object-cover' width={1000} height={1000} src={'/general-bg.jpg'}/>
      </body>
    </html>
  )
}
