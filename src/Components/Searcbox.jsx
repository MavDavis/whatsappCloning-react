import React, { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FormatAlignCenterIcon, SearchIcon } from "../IconsExport";
const Searcbox = () => {
    const [searching, setSearching] = useState(false);

  return (
    <div className="searchbar shadow-sm  dark:bg-darkest-bg min-h-fit responsive2 fixed  p-3  flex  top-16 z-50  dark:text-white items-center ">
    <div className="input w-9/10 mr-3 relative flex items-center">
      <div className="absolute left-4   z-10 text-sm ">
        {!searching ? (
          <SearchIcon className="searchIcon dark:text-slate-300  top-1" />
        ) : (
          <AiOutlineArrowLeft className="text-lg arrowIcon cursor-pointer" onClick={()=>{
            setSearching(false)
          }}/>
        )}
      </div>
      <input
        type="search"
        name=""
        id=""
        onFocus={(e) => {
          setSearching(true);
        }}
        placeholder="search an existing chat"
        className="dark:bg-dark-bg outline-0 dark:text-slate-200 p-4 pl-12 text-sm rounded-lg w-9/10 h-6 relative"
      />
    </div>
    <div className="p-2 float-left cursor-pointer w-4 h-4 rounded-full dark:hover:bg-dark-bg flex items-center justify-center">
      <FormatAlignCenterIcon className=" dark:text-slate-300 FormatAlignCenterIcon" />
    </div>
  </div>  )
}

export default Searcbox