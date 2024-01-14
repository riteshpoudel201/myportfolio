
import Link from '@/node_modules/next/link'
import { link } from 'fs'
import React from 'react'

const Sidebar = () => {
    const sidebarMenu = [
        {
          name:'Personal',
          links:'./personal',
        },
        {
          name:'Experience',
          links:'./experiences',
        },
        {
          name:'Projects',
          links:'./projects',
        },
      ]
  return (
    <>
    <div className='bg-[#475F94] text-white shadow-[0_35px_60px_-15px_#475F94] md:h-[80vh]'>
        <ul className='flex flex-col  text-center'>
            {
                sidebarMenu.map(
                    (items) => {
                        return(
                            <li key={items.name}><Link href={items.links}>{items.name}</Link></li>
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