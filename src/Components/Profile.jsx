import React, { useRef, useState } from "react";
import { useStateContext } from "../Contexts/ContextProvider";
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";
import { AccountCircleIcon } from "../IconsExport";
import { BsFillPencilFill } from "react-icons/bs";
import { Navbar } from "./";
const Profile = () => {
  const {
    friendList,
    sidebarToShow,
    startNewChat,
    setOpenedChat,
    setMessage,
    uploadProfileImage,
    user,
    updateUserUsername,
    updateUserUserStatus,
  } = useStateContext();
  const [username, setUsername] = useState(user.Fullname);
  const [userStatus, setUserStatus] = useState(user.whatsappStatus);
  const handleFileChange = (e) => {
    if (e.target.files) {
      // setFile(e.target.files[0]);
      uploadProfileImage(refContainer.current.files[0]);
    }
  };
  const refContainer = useRef(null);
  const usernameSetter = (e) => {
    e.target.blur();
    updateUserUsername(username);
  };
  const userStatusSetter = (e) => {
    e.target.blur();
    updateUserUserStatus(userStatus);
  };
  return (
    <>
      <Navbar
        children={
          <div className="responsive2 flex z-1000 h-28 dark:bg-dark-bg justify-between items-center pt-16 pb-2 px-4 fixed top-0 left-0 ">
            <div className="flex dark:text-slate-100 text-xl items-center">
              <AiOutlineArrowLeft
                className="cursor-pointer  mr-4"
                onClick={() => {
                  sidebarToShow("chat");
                }}
              />
              <p className="font-semibold">Profile</p>
            </div>
          </div>
        }
      />
      {user && (
        <div className="flex flex-col relative w-full justify-center  mt-32">
          {/* image */}
          <div className="items-center flex justify-center w-full relative px-6">
            <input
              type="file"
              name="inputTag"
              id="inputTag"
              ref={refContainer}
              className=" hidden"
              onChange={handleFileChange}
              accept=".jpg, .png, .jpeg, jfif"
            />
            <label htmlFor="inputTag">
              <div className="h-52 w-52 rounded-full relative my-3 shadow">
                {user.profileImage.length ? (
                  <img
                    src={user.profileImage}
                    className="w-full h-full rounded-full relative"
                    alt="avatar"
                  />
                ) : (
                  <AccountCircleIcon
                    className=" account  min-w-full min-h-full text-slate-300
              rounded-full relative"
                  />
                )}
                <div
                  style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
                  className="absolute h-full w-full top-0 left-0  cursor-pointer rounded-full  hover:opacity-100 flex transition-opacity opacity-0 justify-center items-center flex-col"
                >
                  <AiOutlineCamera className="text-slate-100 cursor-pointer text-2xl mb-2" />
                  <p className="text-small dark:text-slate-100 uppercase text-center">
                    Change your profile picture
                  </p>
                </div>
              </div>
            </label>
          </div>
          {/* name */}
          <div className="mt-4 py-4 flex flex-col px-6">
            <p className="text-teal-600 text-small">Your name</p>
            <div className="flex justify-between items-center dark:text-slate-200 mt-4 ">
              <input
                id="Name"
                name="Name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                onKeyUp={(e) => {
                  e.key === "Enter"
                    ? usernameSetter(e)
                    : setUsername(e.target.value);
                }}
                type="text"
                className="block w-full dark:bg-darkest-bg appearance-none  focus:outline-none  sm:text-sm"
              />
              <BsFillPencilFill className="cursor-pointer" />
            </div>
          </div>
          <div className="border w-full dark:border-gray-800 border-t-0 border-b-1 "></div>
          <div className="flex w-full px-6 py-4">
            <p className="dark:text-slate-400 text-sm">
              This is not your username or pin. This name will be visible to
              your Whatsapp contacts
            </p>
          </div>
          <div className="mt-4 py-4 flex flex-col px-6">
            <p className="text-teal-600 text-small">About</p>
            <div className="flex justify-between items-center dark:text-slate-200 mt-4 ">
              <input
                id="Name"
                name="Name"
                onChange={(e) => {
                  setUserStatus(e.target.value);
                }}
                value={userStatus}
                onKeyUp={(e) => {
                  e.key === "Enter"
                    ? userStatusSetter(e)
                    : setUserStatus(e.target.value);
                }}
                type="text"
                className="block w-full dark:bg-darkest-bg appearance-none  focus:outline-none  sm:text-sm"
              />
              <BsFillPencilFill className="cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
