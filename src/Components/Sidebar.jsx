import React from "react";
import { ActiveChats, SidebarNav, Searcbox, Profile, Friends } from "./";
import { useStateContext } from "../Contexts/ContextProvider";
const Sidebar = () => {
  const { sidebarToShow, sidebarChat, sidebarFriends, sidebarProfile } =
    useStateContext();
  return (
    <div className="sm:w-400 w-screen h-screen dark:bg-darkest-bg  border-r-1 border-r-slate-600  overflow-x-hidden  overflow-y-auto md:overflow-y-hidden  md:hover:overflow-y-auto">
      {sidebarChat && (
        <>
          <SidebarNav />
          <Searcbox /> <ActiveChats />
        </>
      )}
      {sidebarFriends && <Friends />}
      {sidebarProfile && <Profile />}
    </div>
  );
};

export default Sidebar;
