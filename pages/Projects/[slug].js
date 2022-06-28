import React from 'react'
import PropertyImg from '../../public/assets/projects/property.jpeg'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import { projectData } from '../../DataBaseLocal/ProjectData'
import { useRouter } from 'next/router'
function project(query) {

    const router = useRouter()
  console.log(router.query.slug);
    // filter data by id 

    const projectDataById = projectData.filter(project => project.id === router.query.slug)
    console.log(projectDataById);
  return (
<>
    {
        projectDataById.map((project, index) => {
            // console.log("pdata" + project.name)
            return (
                <div className='w-full'>
                <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                   <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10 '/>
                      <Image
                  className='absolute z-1'
                  layout='fill'
                  objectFit='cover'
                  src={PropertyImg}
                  alt='/'
                />
                       <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] text-white translate-x-[-50%] translate-y-[-50%] z-10'>
                         <h2 >{project.description}</h2>
                         <h3 > ReactJs / NextJs / API</h3>
                       </div>
                </div>
            
                <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                      <div className='col-span-4'>
                        <p>Project</p>
                        <h2>Overview</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quo magni, minus libero, dolorem numquam vitae blanditiis ratione praesentium est expedita neque recusandae impedit eum voluptatem quos suscipit obcaecati ullam.</p>
                        <button className='px-8 py-2 mt-8'><Link href='https://github.com/Akshay/Nex'>Code</Link></button>
                      </div>
                      
                      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                          <div className='p-2'>
                             <p className='text-center pb-2 uppercase font-bold'>Technologies</p>
                              <div className='grid grid-cols-3 md:grid-cols-1'>
                                <p className='text-[#343E61] py-2 flex items-center' ><RiRadioButtonFill />React</p>
                                <p className='text-[#343E61] py-2 flex items-center'><RiRadioButtonFill />tailwindCSS</p>
                                <p className='text-[#343E61] py-2 flex items-center'><RiRadioButtonFill />API</p>
                                <p className='text-[#343E61] py-2 flex items-center'><RiRadioButtonFill />Vercel</p>
                                <p className='text-[#343E61] py-2 flex items-center'><RiRadioButtonFill />Github</p>
                              </div>
                          </div>
                      </div>
            
                      <Link href='/'>
                        <p className='cursor-pointer font-semibold uppercase text-[#FF6854]'>Back</p>
                      </Link>
            
                </div>
            
            
                
            </div>
            )

            }
        )
            
    }
    </>
  )
}


// get StaticPaths from json data 
// export async function getStaticPaths() {
//     const paths = projectData.map(item => ({
//         params: {
//             id: item.id.toString()
//         }
//     }))
//     return {
//         paths,
//         fallback: false
//     }
// }




export default project