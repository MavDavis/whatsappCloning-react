import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Sidebar, Main } from "./Components";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Signup, Login } from "./Pages";
import { FiSettings } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Loading from "react-loading-components";

import { useStateContext } from "./Contexts/ContextProvider";
const App = () => {
  const {
    currentMode,
    showChat,
    setShowChat,
    showChatList,
    setShowChatList,
    loading,
    setSettingsModal,
    settingsModal,
    setCurrentOpenedChatModal,
    currentOpenedChatModal

  } = useStateContext();
  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    if (window.innerWidth < 640) {
      setShowChat(false);
      setShowChatList(true);
    } else {
      setShowChat(true);
      setShowChatList(true);
    }
  }

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""} onClick={()=>{
      if(settingsModal === true){
        setSettingsModal(false)
      }
      if(currentOpenedChatModal){
        setCurrentOpenedChatModal(false)
      }
    }}>
      {!loading ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div className="w-screen h-screen bg-teal-600 flex justify-center items-center">
          <Loading
            type="ball_triangle"
            width={300}
            height={300}
            fill="#ffffff"
          />
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const { showChat, showChatList, loggedIn } = useStateContext();
  if (!loggedIn) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="flex relative dark:bg-darkest-bg">
        <div
          className="fixed right-4 bottom-4"
          style={{ zIndex: "1000" }}
        ></div>
        <div className=" fixed ">{showChatList && <Sidebar />}</div>

        <div
          className={` h-screen   
      `}
        >
          {showChat && <Main />}
        </div>
      </div>
    );
  }
};
const Error = () => {
  return (
    <div className="w-full h-full min-h-screen flex-col dark:bg-darkest-bg dark:text-white flex text-center items-center justify-center">
      <h1 className="capitalize text-3xl font-bold ">Page not Found</h1>
      <h1 className="capitalize text-3xl font-bold my-2">404</h1>
      <Link
        className="capitalize text-xl font-bold mb-2 flex justify-between items-center"
        to={`/`}
      >
        <AiOutlineArrowLeft className="text-lg arrowIcon cursor-pointer mr-2" />
        <span>Go back to home</span>
      </Link>
    </div>
  );
};
export default App;
