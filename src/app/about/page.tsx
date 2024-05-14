import React from 'react'
import NavBar from '../components/navbar/page'
import Footer from '../components/footer/page'
import Image from 'next/image'
import headshot from '../images/Julian_Borner_Professional_Profile_Pic.jpg'
type Props = {}
//Build out mobile
const About = (props: Props) => {
  return (
    <div className='flex max-sm:flex-col md:flex-row bg-slate-125 h-full w-full max-sm:h-screen h-screen' >
      
      <div className='flex max-sm:w-full max-sm:h-20 md:w-96 ' >
      <NavBar/>
      </div>
      <div className="flex self-center max-sm:h-full  max-sm:space-y-8 justify-center  flex-col md:space-y-4 " >
        <Image className="flex rounded-lg self-center max-sm:w-80 max-sm:h-86   " src={headshot} alt='Headshot' />
        <div className="flex md:flex flex-col md:space-y-8 max-sm:justify-around max-sm:space-y-4  md:items-center md:w-full " >
        <h1 className="flex md:flex text-3xl max-sm:text-center  " >Full-stack Web Developer & SEO Specialist</h1>
        <p  className=" flex md:text-xl md:flex md:text-wrap md:w-3/4 max-sm:w-5/6 max-sm:self-center" >A full-stack JavaScript Developer from Houston, Texas, working in web development and Digital Marketing. Specialized in creating intuitive and engaging user experiences and designs.</p>
      <div className='flex max-sm:self-center max-sm:w-5/6 md:w-1/4' >
        <Footer/>
      </div>
        </div>
        
      </div> 
      </div>
  )
}

export default About