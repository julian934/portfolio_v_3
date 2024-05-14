'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home from '../../images/icons8-home-96.png'
import About from '../../images/icons8-about-100.png'
import Portfolio from '../../images/icons8-portfolio-90.png'
import Contact from '../../images/icons8-contact-100.png'
import Logo from '../../images/Julian_Borner_Logo.png'
type Props = {}

const NavBar = (props: Props) => {
    //Utilize ternary conditionals if screen sizes evaluate to true.
    //Icons8 for icons
    //width and height affect image sharpness. Modify h and w tailwind values instead.
    //Conditional render to switch nav if different
  return (
    <div className=' flex  bg-slate-50 md:h-full max-sm:w-full md:w-5/6 md:flex-col md:self-center md:justify-center max-sm:space-between md:pb-8 md:-space-y-24 ' >
         <div className=" flex max-sm:h-full justify-self-start self-start md:self-center md:w-96 md:h-80 max-sm:w-full max-sm:-mt-2  md:pr-8 "   >
        <Image className="flex max-sm:w-2/3 md:w-full md:h-4/5  " src={Logo} alt=" Personal Logo"   />
        </div>
         <div className="flex max-sm:justify-self-end  md:hidden md:justify-self-center justify-around md:flex-col md:self-center md:justify-between  md:w-full md:h-72 max-sm:h-2/3 max-sm:w-full max-sm:self-center " >
          <Link href='/home' className="flex self-center" ><Image className="max-sm:h-3/4 md:w-12 " src={Home} alt="Home " width={30} height={4} quality={100} /></Link>
          <Link href='/about' className="flex self-center"  > <Image className=" max-sm:h-3/4 md:w-12" src={About} alt=" About" width={30} height={4} quality={100}/></Link>
          <Link href='/portfolio' className="flex self-center"  ><Image className=" max-sm:h-3/4 md:w-12" src={Portfolio} alt=" Portfolio" width={30} height={4} quality={100} /></Link>
          <Link href='/contact' className="flex self-center"  ><Image className="max-sm:h-3/4 md:w-12 " src={Contact} alt=" Contact" width={30} height={4} quality={100} /></Link>
         </div>
         <div className="  md:flex max-sm:hidden md:block md:justify-start md:justify-around md:flex-col md:self-center md:justify-between text-left md:w-full  md:h-36 " >
         <Link href='/home' className="flex self-center md:text-center text-slate-400 md:text-xl hover:text-black text-left " >Home</Link>
          <Link href='/about' className="flex self-center md:text-xl text-slate-400 hover:text-black text-left "  > About</Link>
          <Link href='/portfolio' className="flex self-center md:text-xl text-slate-400 hover:text-black text-left "  >Portfolio</Link>
          <Link href='/contact' className="flex self-center md:text-xl text-slate-400 hover:text-black text-left "  >Contact</Link>

         </div>
         
        </div>
  )
}

export default NavBar