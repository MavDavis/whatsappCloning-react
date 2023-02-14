import React from "react";
import Navbar from "./Navbar";
import { FaUsers, FaEllipsisV } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { DonutLargeIcon } from "../IconsExport";
const SidebarNav = () => {
  return (
    <div>
      <Navbar
        children={
          <div 
          className="responsive2 flex z-1000 dark:bg-dark-bg justify-between items-center p-4 fixed top-0 left-0 ">
            <div className="w-3/4 relative mr-4">
              <div className="rounded-full w-8 h-8 border">
                <img
                  src=""
                  className="w-full h-full rounded-full relative"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="flex  float-right  items-center justify-center text-lg px-4">
              <FaUsers className="text-2xl" />
              <DonutLargeIcon className="mx-5" />
              <BsFillChatLeftTextFill className="mr-5" />
              <FaEllipsisV />
            </div>
          </div>
        }
      />
 
    </div>
  );
};

export default SidebarNav;
