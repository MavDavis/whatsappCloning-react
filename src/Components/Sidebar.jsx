import React from "react";
import ActiveChats from "./ActiveChats";
import SidebarNav from "./SidebarNav";
import {BsTextLeft} from 'react-icons/bs'
import { FormatAlignCenterIcon } from "../IconsExport";
const Sidebar = () => {
  return (
    <div className="w-400 h-screen dark:bg-darkest-bg  border-r-1 border-r-slate-600  overflow-x-hidden  overflow-y-auto md:overflow-y-hidden  md:hover:overflow-y-auto">
      <SidebarNav />
      <div className="searchbar shadow-sm  dark:bg-darkest-bg min-h-fit w-390 left-0 fixed  p-3  flex  top-16 z-1000   dark:text-white items-center ">
        <div className="input w-9/10 mr-3">
          <input
            type="search"
            name=""
            id=""
            placeholder="start a new chat"
            className="dark:bg-dark-bg dark:text-slate-200 p-4 text-sm rounded-lg w-full h-6 relative"
          />
        </div>
        <div className="p-2 float-left cursor-pointer w-4 h-4 rounded-full dark:hover:bg-dark-bg flex items-center justify-center">
          <FormatAlignCenterIcon className=" dark:text-slate-200" />
        </div>
      </div>
      <ActiveChats />
    </div>
  );
};

export default Sidebar;
