import React from 'react'

const Layout = ({children, className=""}:any) => {
  return (
    <div className={`w-full h-full inline-block z-0 p-32 mt-4 bg-slate-300 rounded-t-3xl ${className}`}>
     {children}
    </div>
  )
}

export default Layout
