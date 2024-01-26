import React from 'react'
import fs from 'fs'
import path from 'path'
import { CldImage } from 'next-cloudinary'

//Need to create this as cloudinary needs client side rendering while data fetching requires server-side rendering
import ServerImage from '@/app/components/ServerImage'


const ProjectDetail = ({params}:{
    params:{
        projectId:string
    }
}) => {

const projectId  = params.projectId;

console.log(projectId);

const dataFile = path.join(process.cwd(), 'public', 'projects.json');
const rawdata = fs.readFileSync(dataFile, 'utf-8');
const projectsData = JSON.parse(rawdata);

const project = projectsData.find((project:any) => project.id === projectId);

return (
    <>
     <main className='flex flex-col w-full h-full '>
        <h1 className='text-8xl py-16 inline-block w-full text-center bg-slate-300'>Project</h1>
        <div className='flex flex-col p-8'>
            <h1 className='capitalize font-extrabold text-2xl w-full md:text-left text-center'>{project.title}</h1>
            <div className='flex flex-col flex-wrap gap-2 mt-8 md:w-1/2 w-full h-auto '>
                <ServerImage source={ project.image } width={0} height={0} className='w-full h-auto ' altText={ project.title }/>
                <p className='w-full h-auto'>
                    {project.description}
                </p>
            </div>
            <div className='flex flex-row  w-1/2 h-auto'>
                <button className='bg-duskblue-300 hover:bg-duskblue-500 p-4 text-white min-w-fit mt-8 rounded-md'>Visit Site</button>
                <button className=' p-4 text-duskblue-500 hover:underline underline-offset-8 min-w-fit mt-8 font-bold'>View Code</button>
            </div>
        </div>
        <hr/>
            
     </main>
    </>
    )
  }
  
  export default ProjectDetail