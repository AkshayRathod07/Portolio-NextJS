import React from 'react'
import PropertyImg from '../public/assets/projects/property.jpeg'
import Crpto from '../public/assets/projects/crypto.jpg'
import ProjectItem from './ProjectItem'
import { projectData } from '../DataBaseLocal/ProjectData'



const Project = () => {

  

  return (
    <div id='projects' className='w-full p-2'>
       <div className='max-w-[1240px] m-auto py-16'>
          <p className='text-xl tracking-widest uppercase text-[#FF6854] '>PROJECTS</p>
          <h2 className='py-4 text-[#343E61] uppercase'>What I've Build</h2>
          <div className='grid md:grid-cols-2 gap-8'>
           
           {/* <ProjectItem title="Property Finder" 
           backgroundImg={PropertyImg} 
           subTitle='NEXT'
           projectUrl='/property' />

           <ProjectItem title="Rest full Api" 
           backgroundImg={Crpto} 
           subTitle='NODEJS'
           projectUrl='/rest' /> */}

           {
              projectData.map((project, index) => {
                console.log("pdata" + project.name)
                return <ProjectItem key={index} Data={project}  />
              }
              )
           }

           

          </div>
       </div>
    </div>
  )
}

export default Project