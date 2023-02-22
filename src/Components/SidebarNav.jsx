import React from "react";
import { Navbar, Modal } from "./";
import { FaUsers, FaEllipsisV } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AccountCircleIcon, DonutLargeIcon } from "../IconsExport";

import { useStateContext } from "../Contexts/ContextProvider";
const SidebarNav = () => {
  const { logout, user, sidebarToShow, settingsModal, setSettingsModal, setShowStatus,setCurrentMode , currentMode} =
    useStateContext();
  const { profileImage } = user;
  const toggleMode = ( )=>{
    if(currentMode === 'Dark'){
      setCurrentMode('Light')
      console.log(currentMode);
    }else{
      setCurrentMode('Dark')
      console.log(currentMode);

    }
  }
  return (
    <div>
      {user && (
        <Navbar
          children={
            <div className="responsive2 flex z-1000 dark:bg-dark-bg bg-light-header-bg justify-between items-center p-4 fixed top-0 left-0 ">
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
                      className=" account  min-w-full min-h-full text-slate-500  dark:text-slate-300
            rounded-full relative"
                    />
                  )}
                </div>
              </div>
              <div className="flex  float-right  items-center justify-center text-lg px-4 ">
                <FaUsers
                  className="text-2xl dark:text-slate-500 text-slate-300 cursor-not-allowed "
                  disabled={true}
                />
                <DonutLargeIcon className="mx-5 cursor-pointer text-slate-800  dark:text-slate-300" onClick={()=>{setShowStatus(true)}} />
                <BsFillChatLeftTextFill
                  className="mr-5 cursor-pointer text-slate-800  dark:text-slate-300"
                  onClick={() => {
                    sidebarToShow("friends");
                  }}
                />
                <FaEllipsisV
                  onClick={() => {
                    setSettingsModal(!settingsModal);
                  }}
                  className=" cursor-pointer text-slate-800  dark:text-slate-300"
                />
              </div>
              {settingsModal && (
                <Modal
                  left="200px"
                  content={
                    <>
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
                     toggleMode()
                     setSettingsModal(false)
                        }}
                        className="mb-4 cursor-pointer"
                      >
                        Toggle mode
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
                    </>
                  }
                />
              )}
            </div>
          }
        />
      )}
    </div>
  );
};

export default SidebarNav;
