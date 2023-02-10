import React from "react";
import ActiveChats from "./ActiveChats";
import SidebarNav from "./SidebarNav";
const Sidebar = () => {
  return (
    <div className="w-400 h-screen bg-darkest-bg  border-r-1 border-r-slate-600  overflow-x-hidden  overflow-y-auto md:overflow-y-hidden  md:hover:overflow-y-auto">
      <SidebarNav />
      <div className="searchbar  px-2 my-2 flex w-full relative    text-white items-center ">
        <ActiveChats />
      </div>
    </div>
  );
};

export default Sidebar;
