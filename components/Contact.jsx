import React from 'react'
import Image from 'next/image'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { BsPersonLinesFill} from 'react-icons/bs'
import {  AiOutlineMail } from 'react-icons/ai'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import Me2 from '../public/assets/123.jpg'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-8 w-full'>
              <p className='text-xl tracking-widest uppercase   text-[#FF6854]'>COntact</p>
              <h2 className='py-2 uppercase text-[#343E61]'>Get in touch</h2>
              <div className='grid lg:grid-cols-5 gap-8'>
                 <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400  p-4'>
                    <div className='lg:p-4 h-full'>
                     <div>
                        <Image className=' hover:scale-105 ease-in duration-300' src={Me2} alt='/' height='430' width='390' />
                     </div>   
                     <div className='py-2'>
                         <h2>Akshay Arsude</h2>
                         <p>Front-End Devloper</p>
                         <p className='py-4'>I am available for freelance or full time position. contact me and let's Talk</p>
                     </div>
                     <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                     
                     <div className='flex items-center justify-between py-4'>

                   <Link href='/'>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110  duration-500'>
                        <FaLinkedinIn  className='text-[#3AC4E5]'/>
                    </div>
                   </Link>

                   <Link href='/'>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110  duration-500'>
                        <FaGithub  className='text-[#3AC4E5]'/>
                    </div>
                   </Link>

                   <Link href='/'>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110  duration-500'>
                        <AiOutlineMail  className='text-[#3AC4E5]'/>
                    </div>
                   </Link>

                   <Link href='/'>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110  duration-500'>
                        <BsPersonLinesFill  className='text-[#3AC4E5]'/>
                    </div>
                   </Link>

                        </div>
                      </div>
                    </div>
                 </div>

                 <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 lg:p-4'>
                       <div className='p-4'>
                           <form>
                               <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                          <label className='uppercase text-sm py-2'>Name</label>
                                          <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>

                                    <div className='flex flex-col'>
                                          <label className='uppercase text-sm py-2'>Phone Number</label>
                                          <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                               </div>
          
                               <div className='flex flex-col py-2'>
                                          <label className='uppercase text-sm py-2'>Email </label>
                                          <input type='email' className='border-2 rounded-lg p-3 flex border-gray-300' />
                               </div>

                               <div className='flex flex-col py-2'>
                                          <label className='uppercase text-sm py-2'>Subject </label>
                                          <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' />
                               </div>

                               <div className='flex flex-col py-2'>
                                          <label className='uppercase text-sm py-2'>Message </label>
                                         <textarea  className='border-2 rounded-lg p-3 flex border-gray-300 overflow-hidden' rows='10'/>
                               </div>

                               <button className='w-full p-4 text-gray-100 mt-4 hover:bg-gradient-to-r from-[#f32f2f66] to-[#709dff]'>Send Message</button>

                           </form>
                       </div>
                 </div>

              </div>
        </div>
        <div  className='flex items-center justify-center py-8'>
            <Link href=''>
                <div className=' mb-12 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110  duration-300'>
                    <HiOutlineChevronDoubleUp size={25} className="text-[#FF6854]" />
                </div>
            </Link>
        </div>

        
    </div>
  )
}

export default Contact