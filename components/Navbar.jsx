import React , {useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { BsPersonLinesFill} from 'react-icons/bs'

const Nvabar = () => {
  const [nav, Setnav] = useState(false) 
  const [shadow , setshadow] = useState(false)

  const handlenav = () => {
    Setnav(!nav)
  }

  useEffect(() => {
  const handleshadow = () => {
    if(window.scrollY >= 90) {
      setshadow(true)
    }else{
      setshadow(false)
    }
  }
  window.addEventListener('scroll' ,handleshadow)
  },[])


  return (
   <div className={shadow ? 'fixed w-full h-16 bg-slate-50 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <p className='text-xl pl-4 uppercase' href='/'>Nexus</p>
        <div>
           <ul className='hidden md:flex'>
             <Link href='/'>
               <li className='ml-10 text-sm uppercase hover:text-[#3AC4E5] ease-in duration-400'>Home</li>
             </Link>
             <Link href='/#about'>
               <li className='ml-10 text-sm uppercase hover:text-[#3AC4E5] ease-in duration-400'>About</li>
             </Link>
             <Link href='/#skills'>
               <li className='ml-10 text-sm uppercase hover:text-[#3AC4E5] ease-in duration-400'>Skills</li>
             </Link>
             <Link href='/#projects'>
               <li className='ml-10 text-sm uppercase hover:text-[#3AC4E5] ease-in duration-400'>Projects</li>
             </Link>
             <Link href='/#contact'>
               <li className='ml-10 text-sm uppercase hover:text-[#3AC4E5] ease-in duration-400'>Contacts</li>
             </Link>
           </ul>
           <div onClick={handlenav} className='md:hidden'>
              <AiOutlineMenu size={25} />
           </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>
          <div className={
                      nav
                      ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                      : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
          }>
               <div >
                    <div className='flex w-full items-center justify-between'>
                    <p className='text-xl pl-4 uppercase' href='/'>Nexus</p>
                       <div onClick={handlenav} className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer'>
                         <AiOutlineClose />
                       </div>
                    </div>
                    <div className='border-b border-gray-300 my-4 py-2'>
                         <span className='w-[85%] md:w-[90%] '>Hii There</span>
                    </div>
               </div>
               <div className='py-4 flex flex-col'>
                 <ul className='uppercase'>
                   <Link href='/'>
                   <li  onClick={() => Setnav(false)} className='py-4 text-sm hover:text-[#3AC4E5] ease-in duration-300'>Home</li>
                   </Link>
                   <Link href='/#about'>
                   <li  onClick={() => Setnav(false)} className='py-4 text-sm hover:text-[#3AC4E5] ease-in duration-300'>About</li>
                   </Link>
                   <Link href='/#skills'>
                   <li  onClick={() => Setnav(false)} className='py-4 text-sm hover:text-[#3AC4E5] ease-in duration-300'>Skills</li>
                   </Link>
                   <Link href='/#projects'>
                   <li onClick={() => Setnav(false)}  className='py-4 text-sm hover:text-[#3AC4E5] ease-in duration-300'>Projects</li>
                   </Link>
                   <Link href='/#contact'>
                   <li  onClick={() => Setnav(false)} className='py-4 text-sm hover:text-[#3AC4E5] ease-in duration-300'>Contacts</li>
                   </Link>
                 </ul>
                 <div className='pt-20 '>
                 <span className='uppercase tracking-widest text-[#343E61]'>Lets Connect</span>
                 <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                     <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 duration-500'>
                     <FaLinkedinIn className='text-[#3AC4E5]'/>
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 duration-500'>
                     <FaGithub className='text-[#3AC4E5]'/>
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 duration-500'>
                     <AiOutlineMail className='text-[#3AC4E5]'/>
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 duration-500'>
                     <BsPersonLinesFill className='text-[#3AC4E5]'/>
                     </div>

                 </div>
                 </div>
               </div>
          </div>
      </div>
   </div>
  )
}

export default Nvabar

