'use client'
import React,{useState,useEffect} from 'react'
import NavBar from '../components/navbar/page'
import Footer from '../components/footer/page'
import {fetchEntries} from '../../app/utils/getData/contentful'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}



const Portfolio = (props: Props) => {
  //Import portfolio pieces from previous portfolio. Add descriptions visible on hover with a darkened overlay. 
  //Modify portfolio to bring data from a database.
  //Add filters based on options
  const [currEntry, setEntries] = useState<any[]>([]);
   const [websiteLinks, setWebsiteLinks] = useState<any>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
 

   useEffect(()=>{
      const fetchData=async()=>{
        try{
          const fetchedEntry:any=await fetchEntries();
        setWebsiteLinks(fetchedEntry.slice(0,2));
        setEntries(fetchedEntry.slice(3))
        }catch(error){
          console.log(error)
        }finally{
          setIsLoading(false)
        }
        
      };
      
      fetchData();
   },[]);
   if (isLoading) {
    return <div>Loading...</div>;
  }

  /*if (error) {
    return <div>Error: {error?.message}</div>;
  }
  */
   process?.env?.NEXT_PUBLIC_CONTENTFUL_SPACE_ID && process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
   process?.env?.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN && process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
   console.log(currEntry)
   console.log(websiteLinks)
   console.log(currEntry && currEntry)
   console.log(process?.env?.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
   console.log(process?.env?.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN)
  return (
    <div className='flex max-sm:flex-col md:grid md:grid-cols-4 md:grid-rows-4 md:flex-row bg-slate-150 h-full w-full max-sm:h-screen h-screen' >
      <div className='flex max-sm:w-full max-sm:h-20 md:w-96 md:col-start-1 md:row-start-1 md:row-span-4 ' >
      <NavBar/>
      </div>
      {/*entry!==null && entry.map((item:any)=>(<div>

      </div>))*/}
      {/* hard-set size is temporary */}
      <div className='flex md:col-start-2 flex-col md:self-center md:justify-self-center md:row-start-2 md:row-span-2 md:col-span-2  md:h-[900px] md:w-[1200px] md:justify-around border-2 bg-white md:space-y-2 md:rounded-xl max-sm:space-y-8 max-sm:px-4' >
         <h1 className='flex bg-slate-400 md:w-24 opacity-75 text-white max-sm:w-28 max-sm:mt-8 ' >PORTFOLIO</h1>
        <div className='flex md:w-full flex-col' >
           
          {/* <h1 className=' ' >My Portfolio</h1>*/}
          {/* <div className='flex ' >
            Filters-Web and Design,later add SEO results.
          </div>*/}
         </div>
          <div className=" flex md:h-3/4 max-sm:flex-col md:w-full md:flex-wrap   " >
            {/* Portfolio Items Here*/}
            {/*Customize visibility for small screens. */}
            {/* Once design is completed, add links.*/}
            <div className='flex md:h-3/4 max-sm:flex-col md:justify-around md:self-center md:w-full'>
              {/* */}
  {/*currEntry.map((entry, index) => (
    <div key={entry?.sys?.id} className='flex max-sm:w-full md:w-1/2 max-sm:h-full h-1/2 flex-col text-black hover:bg-slate-200 hover:bg-cover hover:opacity-75 rounded-xl'>
    
      {websiteLinks[index]?.fields?.websiteLink?.content[0]?.content[0]?.value !== undefined && (
        <Link href={websiteLinks[index]?.fields?.websiteLink?.content[0]?.content[0]?.value} target='_blank'>
          {entry?.fields?.nuThreadImage?.fields?.file?.url && (
            <Image
              className='border-2 md:w-96 max-sm:w-full max-sm:h-full md:h-80 self-center rounded-xl hover:bg-slate-200 hover:bg-cover'
              width={100}
              height={100}
              quality={100}
              src={`https:${entry?.fields?.nuThreadImage?.fields?.file?.url}`}
              alt={entry?.fields?.nuThreadImage?.fields?.title}
            />
          )}
        </Link>
      )}
      <div className='group relative self-center md:justify-center text-center md:self-center w-64 md:w-72 hover:bg-slate-200 max-sm:h-64 md:h-full left-20 md:left-0 md:-top-40'>
        <p className='bg-amber-400 opacity-75 md:rounded-sm'>{entry?.fields?.nuThreadImage?.fields?.title}</p>
        <p className='text-center flex hidden group-hover:block group-hover:bg-blue group-hover:w-full group-hover:h-full hidden hover:block h-full w-full border-2 border-black text-black group-hover:bg-slate-100 md:rounded-md opacity-75'>
          {entry?.fields?.nuThreadImage?.fields?.description}
        </p>
      </div>
    </div>
  ))*/}
  {websiteLinks?.map((web:any)=>(
  <div key={web?.fields?.sys?.id} className='flex max-sm:w-full md:w-1/2 max-sm:h-full h-1/2 flex-col text-black hover:bg-slate-200 hover:bg-cover hover:opacity-75 rounded-xl md:space-y-8 md:text-xl max-sm:text-xl' >
    <h1 className='text-center' >{web?.fields?.nuThreadImage?.fields?.title}</h1>
    {web?.fields?.websiteLink!==undefined && (
      <Link className='md:flex md:justify-center' href={web?.fields?.websiteLink} >
       
        <Image className='border-2 md:w-96 max-sm:w-full max-sm:h-full md:h-80 self-center md:justify-center rounded-xl hover:bg-slate-200 hover:bg-cover'
              width={100}
              height={100}
              quality={100} 
              src={`https:${web?.fields?.nuThreadImage?.fields?.file?.url}`} alt={web?.fields?.nuThreadImage?.fields?.title} />
      </Link>
    )}
    <div className='group relative self-center md:justify-center text-center md:self-center w-64 md:w-72 hover:bg-slate-200 max-sm:h-64 md:h-full left-20 md:left-0 md:-top-40' >
      <p className='bg-amber-400 opacity-75 md:rounded-sm' >{web?.fields?.nuThreadImage?.fields?.title}</p>
      <p className='text-center flex hidden group-hover:block group-hover:bg-blue group-hover:w-full group-hover:h-full hidden hover:block h-full w-full border-2 border-black text-black group-hover:bg-slate-100 md:rounded-md opacity-75' >
        {web?.fields?.nuThreadImage?.fields?.description}
      </p>
    </div>

  </div>))}
</div>
           
            
            
          </div>
          <div className='flex self-end max-sm:self-center max-sm:justify-around max-sm:w-full md:w-full md:justify-center' >
          <Footer/>
          </div>
          
       </div>
       
      </div>
  )
}

export default Portfolio