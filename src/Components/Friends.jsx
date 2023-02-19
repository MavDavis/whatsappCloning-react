import React from "react";
import { AccountCircleIcon } from "../IconsExport";
import { useStateContext } from "../Contexts/ContextProvider";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Navbar } from "./";
const Friends = () => {
  const { friendList, sidebarToShow, startNewChat, setOpenedChat, setChatMessage } =
    useStateContext();

  return (
    <>
      <Navbar
        children={
          <div className="responsive2 flex z-1000 h-24 dark:bg-dark-bg justify-between items-center p-4 fixed top-0 left-0 ">
            <AiOutlineArrowLeft
              className="cursor-pointer text-teal-600 text-2xl"
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
            className="  pl-3  cursor-pointer dark:hover:bg-dark-bg"
            onClick={() => {
              startNewChat(chat.id);
              setOpenedChat(true);
              setChatMessage("");
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
              <div className="border-b border-b-slate-600 py-2 flex w-full h-full relative ml-3 text-slate-200">
                <div className="flex flex-col">
                  <p className="text-lg font-normal">{chat.Fullname}</p>
                  <p className="text-slate-500 mt-1 font-light text-small">
                    {chat.whatsappStatus.slice(0, 20)}
                    {chat.whatsappStatus.length > 20 && <span>...</span>}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Friends;
