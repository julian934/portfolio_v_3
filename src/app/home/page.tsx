'use client'
import React from 'react'
import NavBar from '../components/navbar/page'
import Image from 'next/image'
import Footer from '../components/footer/page'
import Headshot from '../images/Julian_Borner_Professional_Profile_Pic.jpg'
type Props = {}

const Home = (props: Props) => {
  
  return (
    <main className='flex max-sm:flex-col md:flex-row bg-slate-150 h-full w-full max-sm:h-screen h-screen' >
      <div className='flex max-sm:w-full max-sm:h-20 md:w-1/5 md:flex ' >
      <NavBar/>
      </div>
        
        <div className='flex max-sm:flex-col md:w-4/5 md:h-1/2 md:flex md:group md:flex-row self-center  md:h-96 max-sm:justify-center max-sm:w-full max-sm:h-full max-sm:space-y-6 ' >
          <div className='md:w-2/3 md:flex self-center md:justify-center' >
          <Image className=' max-sm:w-60 max-sm:h-30 md:h-full md:w-1/2 md:h-full flex self-center justify-center rounded-2xl ' src={Headshot} alt='Julian Borner Professional Headshot' />
          </div>
          
          <div className="md:flex md:flex-col md:self-center md:justify-start md:space-y-4  " >
          <h1 className='text-center  text-6xl font-semibold md:w-full md:h-16   md:inline-block md:align-middle ' > Julian Borner </h1>
          <p className='text-center text-lg md:h-1/4 ' >Full-stack Developer. Designer. SEO Specialist. </p>
          <div className='flex flex-row w-full justify-center  self-end ' >
            <Footer/>
           </div>
          </div>
          
          
        </div>
       
        
        
        </main>
  )
}

export default Home