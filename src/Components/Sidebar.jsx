import React from "react";
import ActiveChats from "./ActiveChats";
import SidebarNav from "./SidebarNav";
import { AccountCircleIcon } from "../IconsExport";
const Sidebar = () => {
  return (
    <div className="w-400 h-screen bg-darkest-bg  border-r-1 border-r-slate-600  overflow-x-hidden  overflow-y-auto md:overflow-y-hidden  md:hover:overflow-y-auto">
      <SidebarNav />
      <div className="searchbar  px-3 my-2 flex  w-full relative top-14   text-white items-center ">
        <div className="input h-8 w-full relative">
          <input
            type="search"
            name=""
            id=""
            className="bg-dark-bg rounded-lg w-9/10 h-full relative"
          />
        </div>
        <div className="flex float-left text-white">
          <AccountCircleIcon />
        </div>
      </div>
      <ActiveChats />
    </div>
  );
};

export default Sidebar;
