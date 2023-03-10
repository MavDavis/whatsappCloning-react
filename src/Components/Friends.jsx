import React from "react";
import { AccountCircleIcon } from "../IconsExport";
import { useStateContext } from "../Contexts/ContextProvider";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Navbar } from "./";
const Friends = () => {
  const { friendList, sidebarToShow, startNewChat, setOpenedChat, setChatMessage,setShowChat,setShowChatList } =
    useStateContext();
const friendOpener = ()=>{
  if (window.innerWidth < 640) {
    setShowChat(true);
    setShowChatList(false);
  } else {
    setShowChat(true);
    setShowChatList(true);
  }
}
  return (
    <div data-aos="zoom-in-left">
      <Navbar
        children={
          <div className="responsive2 flex z-1000 h-24 dark:bg-dark-bg bg-light-bg-green dark:text-slate-300 text-white  justify-between items-center p-4 fixed top-0 left-0 ">
            <AiOutlineArrowLeft
              className="cursor-pointer dark:text-teal-600 text-white text-2xl"
              onClick={() => {
                sidebarToShow("chat");
              }}
            />
          </div>
        }
      />
      <ul className="mt-28 relative w-full">
        {friendList.map((chat, ind) => (
          <li
            key={ind}
            className="  pl-3  cursor-pointer dark:hover:bg-dark-bg hover:bg-light-header-bg"
            onClick={() => {
              startNewChat(chat.id);
              setOpenedChat(true);
              setChatMessage("");
              friendOpener()
            }}
          >
            <div className="flex items-center h-fit ">
              <div className="rounded-full w-12 relative h-11 border flex items-center  justify-center ">
                {chat.profileImage.length ? (
                  <img
                    src={chat.profileImage}
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
              <div className="border-b dark:border-b-slate-600 border-b-slate-200 py-2 flex w-full h-full relative ml-3 text-slate-800 dark:text-slate-200">
                <div className="flex flex-col">
                  <p className="text-lg font-normal">{chat.Fullname}</p>
                  <p className="dark:text-slate-500 mt-1 font-light text-small">
                    {chat.whatsappStatus.slice(0, 20)}
                    {chat.whatsappStatus.length > 20 && <span>...</span>}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
