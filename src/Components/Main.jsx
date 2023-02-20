import React, { useState } from "react";
import MainNav from "./MainNav";
import image from "../assets/bgImage";
import { useStateContext } from "../Contexts/ContextProvider";
import EmojiPicker from "emoji-picker-react";
import {RiCloseLine} from 'react-icons/ri'
import MessageFooter from "./MessageFooter";
import ChatScroll from "./ChatScroll";
const Main = () => {
  const {
    openedChat,
    currentOpenedChat,
    loggedIn,
    user,
    showEmoji,
    setChatMessage,
    setShowEmoji,
  } = useStateContext();
  const dark = true;
  return (
    <div className="relative w-full h-full">
      {!openedChat ? (
        <div className=" responsive  fixed  top-0 min-h-fit h-full dark:bg-dark-bg z-50 dark:text-white flex flex-col justify-center items-center">
          {" "}
          <div className="w-full h-fit flex  justify-center items-center">
            {image}
          </div>
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
          // style={{ width: "calc(100vw - 415px", left: "415px" }}
          className="dark:bg-hero-pattern responsive bg-no-repeat bg-cover fixed overflow-y-auto top-0 min-h-fit h-full text-white"
        >
          <div className="relative w-full h-fit min-h-full bg-transparent">
            <MainNav />
            <ChatScroll currentOpenedChat={currentOpenedChat} />
            <MessageFooter />
            {showEmoji && (   <div className="w-full flex relative">
             
            
                <EmojiPicker className='relative'
                  width={"100%"}
                  onEmojiClick = {(emojiData) =>{
                    setChatMessage((prev)=> prev + emojiData.emoji);
                  }}
                  height={400}
                  theme={dark ? "dark" : "light"}
                />
            
            </div>  )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
