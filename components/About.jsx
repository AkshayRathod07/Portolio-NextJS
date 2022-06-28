import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Me from '../public/assets/akshay.jpeg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
             <div className='col-span-2'>
                 <p className='uppercase text-xl tracking-widest text-[#FF6854]'>About</p>
                 <h2 className='py-2 text-[#343E61] uppercase' >Who I Am</h2>
                 <p className='py-2 text-gray-600'>I am not your Normal Devloper</p>
                 <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem velit est quae magnam ipsum assumenda officia dolor ea sed vel aliquid culpa saepe cum dolore doloribus expedita, quidem blanditiis aliquam ut aperiam quia dicta voluptate exercitationem! Vitae, voluptatem earum.</p>
                 <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem velit est quae magnam ipsum assumenda officia dolor ea sed vel aliquid culpa saepe cum dolore doloribus expedita, quidem blanditiis aliquam ut aperiam quia dicta voluptate exercitationem! Vitae, voluptatem earum.</p>
                  <Link href='/#projects'><p className='uppercase py-2 text-gray-600  cursor-pointer font-bold hover:text-[#FF6854] duration-500'>Check Out my latest project</p></Link>
             </div>
             <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-centerp-4 hover:scale-105 ease-in duration-300'>
             <Image className='' src={Me}
         alt='/'
         height='750'
         width='550' 
         />
             </div>
        </div>
    </div>
  )
}

export default About