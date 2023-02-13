import React from "react";
import ActiveChats from "./ActiveChats";
import Searcbox from "./Searcbox";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <div className="w-400 h-screen dark:bg-darkest-bg  border-r-1 border-r-slate-600  overflow-x-hidden  overflow-y-auto md:overflow-y-hidden  md:hover:overflow-y-auto">
      <SidebarNav />
      <Searcbox />
      <ActiveChats />
    </div>
  );
};

export default Sidebar;
