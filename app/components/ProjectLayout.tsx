'use client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

const ProjectList = ({imageURL, projectTitle, projectId}:any) =>{
    return(
      <>
      <div className="w-[250px] h-[150px] rounded-lg relative bg-green-500">
        <CldImage src={imageURL} width={0} height={0} className="h-full w-full rounded-md" alt="NO IMAGE" />
        <span className="absolute top-1 left-1 text-white bg-black bg-opacity-40 text-sm">{ projectTitle }</span>
        
        <Link className="absolute bottom-1 left-1/2 -translate-x-1/2  bg-duskblue-500 bg-opacity-70 hover:bg-opacity-100 text-white p-2 text-sm" href={`/portfolio/${ encodeURIComponent(projectId)}`}>View details </Link>
      </div>
      </>
    )
  }

  export default ProjectList