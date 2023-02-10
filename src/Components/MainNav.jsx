import React from 'react'
import Navbar from './Navbar'
const MainNav = () => {
  return (
    <Navbar
      children={
        <div className="flex w-full  justify-between items-center" style={{left:'410px'}}>
        <div className="w-3/4 relative mr-4">
        <div className="rounded-full w-12 h-12 border">
            <img src="" alt="" />
          </div>
        </div>
          <div className="flex  float-right  items-center justify-center">
        
          </div>
        </div>
      }
    />
  )
}

export default MainNav