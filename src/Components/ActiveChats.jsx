import React from "react";
import { chatList } from "../assets/dummyData";
import DateFormat from "../assets/functions/DateFormat";
import { AccountCircleIcon } from "../IconsExport";
const ActiveChats = () => {
  const openChat = (id) => {
    console.log(id);
  };
  const user = false;
  return (
    <ul className="mt-28 relative w-full">
      {chatList.map((chat, ind) => (
        <li
          key={ind}
          className="  pl-3 cursor-pointer dark:hover:bg-dark-bg"
          onClick={() => {
            openChat(chat.userId);
          }}
        >
          <div className="flex items-center h-fit ">
            <div className="rounded-full w-12 relative h-11 border flex items-center  justify-center ">
              {user ? (
                <img
                  src=""
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
                <p className="text-lg font-normal">{chat.Username}</p>
                <p className="text-sm text-slate-300 font-thin">
                  {chat.message[chat.message.length - 1].message}
                </p>
                <p>{<DateFormat />}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActiveChats;
