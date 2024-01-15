
import Link from '@/node_modules/next/link'
import { link } from 'fs'
import React from 'react'
import { FaRegCircle } from "react-icons/fa";

const Sidebar = () => {
    const sidebarMenu = [
        {
          name:'Personal',
          links:'/portfolio/personal',
        },
        {
          name:'Experience',
          links:'/portfolio/experiences',
        },
        {
          name:'Projects',
          links:'/portfolio/projects',
        },
      ]
  return (
    <>
    <div className=' shadow-[0_35px_60px_-15px_#475F94] md:h-[83vh]'>
        <ul className='flex md:flex-col flex-row text-center h-full justify-center align-middle text-lg gap-2'>
            {
                sidebarMenu.map(
                    (items) => {
                        return(
                            <li className='flex flex-row justify-left gap-2 md:p-3 p-1 text-gray-600 w-full'  key={items.name}><FaRegCircle size='20' className='md:block w-2 h-full hidden'/><Link  href={items.links}>{items.name}</Link></li>
                        )
                    }
                )
            }
        </ul>
    </div>
    </>
  )
    
}

export default Sidebar