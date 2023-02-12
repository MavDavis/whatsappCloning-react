import React, { useState, createContext, useContext } from "react";
import { chatList } from "../assets/dummyData";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [openedChat, setOpenedChat] = useState(false);
  const [currentOpenedChat, setCurrentOpenedChat] = useState(null);
  const [currentMode, setCurrentMode] = useState('Dark')
  const [message, setMessage] = useState("");
const [user, setUser] = useState(null)
  const openChat = (id) => {
const chat = chatList.find(chat=> chat.userId === id)
setCurrentOpenedChat (chat)
  };
  const sendMessage = ()=>{
    const newMessage = {userId:1 , message, time:new Date() }
    setMessage('')
    setCurrentOpenedChat(prev =>{
      return {...prev, message:[...prev.message, newMessage]}
    })
  }
  return (
    <StateContext.Provider
      value={{
        openedChat,
        setOpenedChat,
        currentOpenedChat,
        setCurrentOpenedChat,
        openChat,
        sendMessage,
        currentMode, message, setMessage
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
