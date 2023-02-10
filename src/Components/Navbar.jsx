import React from 'react'

const Navbar = ({children}) => {
  return (
    <nav className='navbar  top-0 w-fit flex  shadow-lg p-2 bg-dark-bg text-slate-300 z-1000'>
        {children}
    </nav>
  )
}

export default Navbar