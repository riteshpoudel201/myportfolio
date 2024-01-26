'use client'
import { CldImage } from "next-cloudinary"

const ServerImage = ({source,altText,className=""}:any) => {
  return (
    <>
    <CldImage src={source} width={0} height={0} alt={altText} className={ ` ${className}` } />
    </>
  )
}

export default ServerImage