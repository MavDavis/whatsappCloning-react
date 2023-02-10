import React from "react";
import { chatList } from "../assets/dummyData";
const ActiveChats = () => {
  return (
    <ul className="mt-16 relative w-full">
      {chatList.map((chat) => (
        <li className="  pl-3 cursor-pointer">
          <div className="flex items-center h-fit">
            <div className="rounded-full w-12 h-12 border">
              <img
                src=""
                className="w-full h-full rounded-full relative"
                alt="avatar"
              />
           
            </div>
            <div className="border-b border-b-slate-600 py-2 flex w-full h-full relative ml-3 text-slate-200">
            <div className="flex flex-col">
            <p className="text-lg font-medium">{chat.Username}</p>
              <p className="text-sm ">{chat.message[chat.message.length - 1].message}</p>
            </div>
              </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActiveChats;
