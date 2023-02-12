import React from 'react'
import Navbar from './Navbar'
import { useStateContext } from "../Contexts/ContextProvider";
import { SearchIcon,MoreVertIcon } from '../IconsExport';
const MainNav = () => {
  const { openedChat, currentOpenedChat } = useStateContext();
console.log(currentOpenedChat);
  return (
    <Navbar
    children={
      <div style={{width:'calc(100vw - 410px)', left:'415px'}} className="flex z-1000 dark:bg-dark-bg justify-between items-center p-4 fixed top-0  ">
      <div className="flex items-center">
      <div className="rounded-full w-8 h-8 border">
            <img
              src=""
              className="w-full h-full rounded-full relative"
              alt="avatar"
            />
        </div>
        <p className="text-lg font-semibold dark:text-slate-200 ml-3">
          {currentOpenedChat.Username}
        </p>
      </div>
        <div className="flex dark:text-slate-300    items-center justify-center text-lg px-4">
   <SearchIcon className='mr-6'/>
   <MoreVertIcon/>
        </div>
      </div>
    }
  />
  )
}

export default MainNav