import React from 'react'
import Navbar from './components/navbar.tsx';
import Link from '@/node_modules/next/link';
const Erorrpage = () => {
  return (
    <>
      <div className='flex flex-col gap-3 h-full items-center justify-center'>
        <div>404 - Page Not found</div>
        <a className='bg-duskblue-300 text-white hover:bg-duskblue-500 rounded p-3 ml-2'><Link href='/'>Go to Home</Link></a>
      </div>
    </>
  )
}

export default Erorrpage