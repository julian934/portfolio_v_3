import React from 'react'
import NavBar from '../components/navbar/page'
import Footer from '../components/footer/page'
type Props = {}
//customize the form and connect to email api.
const Contact = (props: Props) => {
  return (
    <div className='flex max-sm:flex-col md:flex-row bg-slate-150 h-full w-full max-sm:h-screen h-screen' >
    <div className='flex max-sm:w-full max-sm:h-20 md:w-1/5 ' >
      
      <NavBar/>
      </div>
      <section className=" dark:bg-gray-900 md:self-center max-sm:flex max-sm:self-center  md:w-4/5 rounded-xl ">
  <div className="py-8 lg:py-16 px-4 mx-auto  max-w-screen-md md:w-4/5 bg-white max-sm:self-center max-sm:pt-12  rounded-xl ">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got an idea for an app? need a developer, or a designer? Need Search Engine Optimization? Lets work together!</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
      <div className='flex flex-row w-full justify-center  self-end ' >
            <Footer/>
           </div>
  </div>
  
</section>

    </div>
  )
}

export default Contact