import React from 'react'

const Navbar = ({children}) => {
  return (
    <nav className='navbar  top-0 w-fit flex  shadow-lg p-2 dark:bg-dark-bg dark:text-slate-300 z-1000'>
        {children}
    </nav>
  )
}

export default Navbar