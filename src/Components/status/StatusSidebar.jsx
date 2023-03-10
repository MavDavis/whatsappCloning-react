import React, {useRef} from 'react'
import { useStateContext } from '../../Contexts/ContextProvider'
import { AccountCircleIcon } from '../../IconsExport'
import {BsPlusCircle} from 'react-icons/bs'
import {ActiveStatus} from '../'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const StatusSidebar = () => {
  const {user, uploadStatus,setShowStatus} = useStateContext()
  const statusPhoto = useRef(null);
  const handleFileChange =()=>{
    uploadStatus(statusPhoto.current.files[0])
  }
  return (
    <div className="sm:w-400 w-screen h-screen dark:bg-dark-bg  bg-white border-r-1 dark:border-r-slate-600 border-r-slate-300  overflow-x-hidden  overflow-y-auto md:overflow-y-hidden  md:hover:overflow-y-auto">
         <div className="flex items-center px-3 pt-16 pb-8 border-b-1 dark:border-slate-600 dark:bg-dark-bg border-slate-300 bg-light-header-bg relative">
            <div className="rounded-full w-8 h-8 border">
              {user.profileImage.length ? (
                <img
                  src={user.profileImage}
                  className="w-full h-full rounded-full relative"
                  alt="avatar"
                />
              ) : (
                <AccountCircleIcon
                  className=" account  min-w-full min-h-full text-slate-300
              rounded-full relative"
                />
              )}
            </div>
            <div className="flex flex-col justify-center  ml-3 dark:text-slate-200 cursor-pointer">
            <p className="">
              {user.Fullname}
            </p>
            <p className="  text-sm text-slate-400">
            status
            </p>
            </div>
            <div className="absolute w-full  p-6  h-full top-0 bg-transparent left-0 opacity-100 flex items-center justify-end ">
            <AiOutlineCloseCircle className='dark:text-slate-200 mt-6 mr-3 text-3xl sm:hidden flex cursor-pointer'   onClick={() => {
            setShowStatus(false);
          }}/>
            <input
              type="file"
              name="inputTag"
              id="statusPhoto"
              ref={statusPhoto}
              className=" hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="statusPhoto">
            <div className="rounded-full w-8 h-8 mt-8 cursor-pointer"><BsPlusCircle className='dark:text-slate-200 text-2xl'/></div>
            </label>
            </div>
            </div>
            <ActiveStatus/>
</div>  )
}

export default StatusSidebar