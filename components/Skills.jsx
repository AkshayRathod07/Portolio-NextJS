import React from 'react'
import Image from 'next/image'
import tailwind from '../public/assets/skills/tailwind.png'
import git from '../public/assets/skills/github1.png'
import javascript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import nextjs from '../public/assets/skills/nextjs.png'
import node from '../public/assets/skills/node.png'
import mongo from '../public/assets/skills/mongo.png'
import html from '../public/assets/skills/html.png'


function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p  className='text-xl tracking-widest uppercase text-[#FF6854]'>Skills</p>
            <h2 className='py-4 text-[#343E61] uppercase'>what I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                 </div>

                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TAILWINDCSS</h3>
                        </div>
                    </div>
                 </div>

                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={git} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GITHUB</h3>
                        </div>
                    </div>
                 </div>

                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                 </div>

                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>
                 </div>

                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXTJS</h3>
                        </div>
                    </div>
                 </div>

                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={node} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NODEJS</h3>
                        </div>
                    </div>
                 </div>

                 <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mongo} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MONGODB</h3>
                        </div>
                    </div>
                 </div>

                 
            </div>
        </div>
    </div>
  )
}

export default Skills
