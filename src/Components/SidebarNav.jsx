import React from "react";
import Navbar from "./Navbar";
import { FaUsers, FaEllipsisV } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { DonutLargeIcon } from "../IconsExport";
import { AccountCircleIcon } from "../IconsExport";

import { useStateContext } from "../Contexts/ContextProvider";
const SidebarNav = () => {
  const { logout, user, sidebarToShow, settingsModal, setSettingsModal } =
    useStateContext();
  const { profileImage } = user;
  return (
    <div>
      {user && (
        <Navbar
          children={
            <div className="responsive2 flex z-1000 dark:bg-dark-bg justify-between items-center p-4 fixed top-0 left-0 ">
              <div className="w-3/4 relative mr-4">
                <div
                  className="rounded-full w-8 h-8 border cursor-pointer"
                  onClick={() => {
                    sidebarToShow("profile");
                  }}
                >
                  {profileImage.length ? (
                    <img
                      src={profileImage}
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
              </div>
              <div className="flex  float-right  items-center justify-center text-lg px-4">
                <FaUsers
                  className="text-2xl text-slate-500 cursor-not-allowed "
                  disabled={true}
                />
                <DonutLargeIcon className="mx-5 cursor-pointer" />
                <BsFillChatLeftTextFill
                  className="mr-5 cursor-pointer"
                  onClick={() => {
                    sidebarToShow("friends");
                  }}
                />
                <FaEllipsisV
                  onClick={() => {
                    setSettingsModal(!settingsModal);
                  }}
                  className=" cursor-pointer"
                />
              </div>
              {settingsModal && (
                <div
                  style={{
                    zIndex: "100000",
                    left: "200px",
                    top: "3.5rem",
                    boxShadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    backgroundColor: "#2a3942",
                  }}
                  className="fixed  rounded-lg h-32 w-48 p-4 flex flex-col    "
                >
                  <p
                    onClick={() => {
                      setSettingsModal(false);
                      sidebarToShow("profile");
                    }}
                    className="mb-4 cursor-pointer"
                  >
                    Profile
                  </p>
                  <p
                    onClick={() => {
                      setSettingsModal(false);
                      logout();
                    }}
                    className=" cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          }
        />
      )}
    </div>
  );
};

export default SidebarNav;
