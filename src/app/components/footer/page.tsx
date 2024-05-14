'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LinkedIn from '../../images/icons8-linkedin-100.png'
import Instagram from '../../images/icons8-instagram-100.png'
import Github from '../../images/icons8-github-90.png'
import Twitter from '../../images/icons8-twitter-90.png'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className=' flex  flex-row  justify-center max-sm:w-3/4 md:h-12 md:w-3/4 justify-around  ' >
      <Link href='/' className='hover:bg-amber-300 rounded-xl h-10' ><Image className='flex ' src={LinkedIn} alt='LinkedIn' width={40} height={10} quality={100} /></Link>
      <Link href='/' className='hover:bg-amber-300 rounded-xl h-10' ><Image className=' flex ' src={Instagram} alt='Instagram' width={40} height={10} quality={100} /></Link>
      <Link href='/' className='hover:bg-amber-300 rounded-xl h-10' ><Image className=' flex ' src={Github} alt='Github' width={40} height={10} quality={100} /></Link> 
      <Link href='/' className='hover:bg-amber-300 rounded-xl h-10' ><Image className='flex ' src={Twitter} alt='Twitter' width={40} height={10} quality={100} /></Link>
    </footer>
  )
}

export default Footer