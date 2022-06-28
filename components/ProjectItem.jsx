import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropertyImg from '../public/assets/projects/property.jpeg'


const ProjectItem = ({title ,backgroundImg, projectUrl, subTitle, Data}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl  rounded-xl p-4 group hover:bg-gradient-to-r from-[#f32f2f66] to-[#709dff]'>
               <Image className='rounded-xl group-hover:opacity-10' src={PropertyImg} alt='/' />
               <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]'>
                     <h3 className='uppercase text-2xl text-white tracking-wider text-center'> {Data.name} </h3>
                     <p className=' uppercase pb-4 pt-2 text-white text-center'>subTitle</p>
                     <Link href={`/Projects/${Data.id}`}  >
                     {/* <Link href={{
                      pathname: Data.id,
                      query: {
                        id: Data.id
                      }
                      
                     }} > */}
                         <p className='uppercase text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                     </Link>
               </div>
           </div>
  )
}

export default ProjectItem