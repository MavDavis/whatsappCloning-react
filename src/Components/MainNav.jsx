import React from "react";
import Navbar from "./Navbar";
import { useStateContext } from "../Contexts/ContextProvider";
import { AccountCircleIcon } from "../IconsExport";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { SearchIcon, MoreVertIcon } from "../IconsExport";
const MainNav = () => {
  const { openedChat, currentOpenedChat,setShowChat, setShowChatList  } = useStateContext();
  return (
    <Navbar
      children={
        <div
          // style={{ width: "calc(100vw - 410px)", left: "415px" }}
          className="flex z-1000 responsive dark:bg-dark-bg justify-between items-center p-4 fixed top-0  "
        >
          <div className="flex items-center">
            <div className="rounded-full w-8 h-8 border">
              {currentOpenedChat.img.length ? (
                <img
                  src={currentOpenedChat.img}
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
            <p className="text-lg font-semibold dark:text-slate-200 ml-3">
              {currentOpenedChat.Username}
            </p>
          </div>
          <div className="flex dark:text-slate-300    items-center justify-center text-lg px-4">
            <AiOutlineArrowLeft className="cursor-pointer sm:hidden block" onClick={()=>{
setShowChat(false)
setShowChatList(true)
            }} />
            <SearchIcon  className="mx-6"/>
            <MoreVertIcon />
          </div>
        </div>
      }
    />
  );
};

export default MainNav;
