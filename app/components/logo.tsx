'use client'
import {motion as m} from 'framer-motion';
import { useState } from 'react';
const Logo = () => {
  const [hovered, setHover]:any = useState(false);
  const logoStyle = 'flex flex-row justify-center align-middle relative w-[65px] h-[65px] p-2 font-extrabold border-solid border-2 border-[#475F94] rounded-full text-[2rem] bg-[#475F94] text-white';
  const childrens = {
    animate1:{
      left:10
    },
    animate2:{
      right:10,
      rotate:0
    }
  }
  return (
    <>
    <m.div onHoverStart={(e)=>{setHover(true)}} onHoverEnd={(e)=>{setHover(false)}}  className={ `${logoStyle}` }>
        <m.h1 
        variants={childrens}
        initial={{position:'absolute',top:4,right:16}}
        animate={hovered?"animate1":""}
        transition={{
          duration:0.5,
        }}

        >R</m.h1>
        <m.h1 
        variants={childrens}
        initial={{position:'absolute',rotate:180,top:4,right:28}}
        animate={hovered?"animate2":""}
        transition={{
          duration:0.5,
        }}
        >P</m.h1>
    </m.div>
    </>
  )
}

export default Logo