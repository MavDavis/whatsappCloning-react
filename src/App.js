import React from "react";
import "./App.css";
import { Navbar, Sidebar, Main, MainNav } from "./Components";

import { FiSettings } from "react-icons/fi";
const App = () => {
  const { activeMenu } = true;
  const currentMode = "Dark";
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div
          className="fixed right-4 bottom-4"
          style={{ zIndex: "1000" }}
        ></div>
        <div className=" fixed    ">
          <Sidebar />
        </div>

        <div
              style={{ width: "calc(100vw - 415px)" }}

          className={` h-screen   ml-400
            `}
        >
          {/* <div className="fixed md:static  navbar w-full ">
            <MainNav />
          </div> */}
          <Main />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
