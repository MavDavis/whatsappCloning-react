import React, { useState } from "react";
import MainNav from "./MainNav";
import image from "../assets/bgImage";
import { useStateContext } from "../Contexts/ContextProvider";
import {
  KeyboardVoiceIcon,
  TagFacesIcon,
  AttachFileIcon,
} from "../IconsExport";
const Main = () => {
  const { openedChat, currentOpenedChat } = useStateContext();
  return (
    <div className="relative w-full h-full">
      {!openedChat ? (
        <div className="   h-full flex flex-col justify-center items-center w-full dark:bg-dark-bg z-50">
          {image}
          <div
            style={{ minHeight: "40%" }}
            className="mt-6 text-center justify-center items-center flex flex-col text-slate-200"
          >
            <h1 className="text-3xl font-light ">Whatsapp Web</h1>
            <p className="text-sm font-light mt-4 text-slate-400 ">
              Send and receive messages without keeping your phone online.
            </p>
            <p className="text-sm font-light  text-slate-400  ">
              Use Whatsapp on up to 4 linked devices and 1 phone at the same
              time.
            </p>
            <div className="mt-auto">
              <p className="text-sm text-slate-400">End-to-end-encrypted</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ width: "calc(100vw - 415px", left: "415px" }}
          className="dark:bg-hero-pattern bg-no-repeat bg-cover fixed top-0 min-h-screen text-white"
        >
          <div className="relative w-full h-fit min-h-full bg-transparent">
            <MainNav />
            <div
              style={{ width: "calc(100vw - 415px", left: "415px" , padding:'.75rem 2.75rem'}}
              className="flex   dark:bg-darkest-bg min-h-fit   fixed  flex  bottom-0 z-1000   dark:text-white items-center "
            >
              <div className="icons flex items-center dark:text-slate-400">
                <TagFacesIcon />
                <AttachFileIcon className="mx-4"/>
              </div>
              <div className="input w-9/10 mr-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="start a new chat"
                  className="dark:bg-dark-bg outline-0 dark:text-slate-200 p-4 text-sm rounded-lg w-full h-8 relative"
                />
              </div>
              <div className="icons flex items-center dark:text-slate-400">
           <KeyboardVoiceIcon/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
