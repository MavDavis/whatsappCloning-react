import React, { useState, createContext, useContext } from "react";
import { chatList } from "../assets/dummyData";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [openedChat, setOpenedChat] = useState(false);
  const [currentOpenedChat, setCurrentOpenedChat] = useState(null);
  const [currentMode, setCurrentMode] = useState('Dark')
  const [message, setMessage] = useState("");

  const openChat = (id) => {
const chat = chatList.find(chat=> chat.userId === id)
setCurrentOpenedChat (chat)
  };
  return (
    <StateContext.Provider
      value={{
        openedChat,
        setOpenedChat,
        currentOpenedChat,
        setCurrentOpenedChat,
        openChat,
        currentMode, message, setMessage
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
