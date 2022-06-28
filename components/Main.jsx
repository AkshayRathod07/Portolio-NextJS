import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { BsPersonLinesFill} from 'react-icons/bs'
import {  AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div>
                 <p className='uppercase text-sm tracking-widest text-gray-600 '>Let build</p>
                 <h1 className=' py-4 text-gray-700'>
                     Hi , I'm <span className='text-[#FF6854]'>Akshay</span>
                 </h1>
                 <h1 className=' py-4 text-gray-700'>
                   A Front-End web  Devloper
                 </h1>
                 <p className='py-4 text-gray-500 max-w-[70%] m-auto'>
                    I'm a front end devloper specializing in a building (and occasionally designing) exceptional digital experience.Currently, I'm focus on buliding responsive front-end applications while learning backend technolgies..
                 </p>
                 
                 <div className='flex items-center justify-between max-w-[330px] mx-auto py-4'>
                 <Link href='/'>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110  duration-500'>
                        <FaLinkedinIn  className='text-[#3AC4E5]'/>
                    </div>
                   </Link>

                   <Link href='https://github.com/Akshay'>
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
  )
}

export default Main