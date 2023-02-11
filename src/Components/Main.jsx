import React, { useState } from "react";
import MainNav from "./MainNav";
import image from "../assets/bgImage";
import { useStateContext } from "../Contexts/ContextProvider";
const Main = () => {
  const { openedChat,currentOpenedChat } = useStateContext();
  console.log(currentOpenedChat);
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
              Send and receive messages without keeping your phone online.{" "}
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
        <div className="bg-hero-pattern min-h-screen text-white">
        <p>Name :{currentOpenedChat.Username}</p>
        <p>Id:{currentOpenedChat.userId}</p>
        </div>
      )}
    </div>
  );
};

export default Main;
