import Link from '@/node_modules/next/link'
import React from 'react'

const DropdownMenu = () => {
    //array for populating portfolio dropdown
    const portfolioDropdown = [
        {
            name : 'Personal',
            link : '../portfolio/personal'
        },
        {
            name : 'Experience',
            link : '../portfolio/experiences'
        },
        {
            name : 'Projects',
            link : '../portfolio/projects'
        },
    ]
  return (
    <>
      <ul>
        {
            portfolioDropdown.map(
                (items) => {
                    return(
                        <li key={items.name}><Link href={ items.link}>{items.name}</Link></li>
                    )
                }
            )
        }
      </ul>
    </>
  )
}

export default DropdownMenu