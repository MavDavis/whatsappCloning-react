import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Sidebar, Main, MainNav } from "./Components";

import { FiSettings } from "react-icons/fi";
import { useStateContext } from "./Contexts/ContextProvider";
const App = () => {
  const { currentMode, showChat, setShowChat, showChatList, setShowChatList } =
    useStateContext();
  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    if (window.innerWidth < 640) {
      setShowChat(false);
      setShowChatList(true)

    }else{
      setShowChat(true);
      setShowChatList(true)
    }
  }

  useEffect(() => {
    checkSize()
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);
  
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div
          className="fixed right-4 bottom-4"
          style={{ zIndex: "1000" }}
        ></div>
        <div className=" fixed    ">{showChatList && <Sidebar />} </div>

        <div
          className={` h-screen   
            `}
        >
          {showChat && <Main />}{" "}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
