import React, { useState, createContext, useContext } from "react";
import { chatList } from "../assets/dummyData";
import { firebaseAuth } from "../firebase/index";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";


import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  getDoc,
  addDoc,
  onSnapshot,
  getFirestore,
  setDoc,
  doc,
  query,
  orderBy,
  Timestamp,
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import { async } from "@firebase/util";
const provider = new GoogleAuthProvider();

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [openedChat, setOpenedChat] = useState(false);
  const [currentOpenedChat, setCurrentOpenedChat] = useState(null);
  const [currentMode, setCurrentMode] = useState("Dark");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [showChat, setShowChat] = useState(true)
  const [showChatList, setShowChatList] = useState(true)
  const openChat = (id) => {
    const chat = chatList.find((chat) => chat.userId === id);
    setCurrentOpenedChat(chat);
  };
  const sendMessage = () => {
    const newMessage = { userId: 1, message, time: new Date() };
    setMessage("");
    setCurrentOpenedChat((prev) => {
      return { ...prev, message: [...prev.message, newMessage] };
    });
  };

  function addingUser() {
    setDoc(doc(db, "User", ''), {
      Fullname: " ",
      Username: "",
      age: "",
      DOB: "",
      Email: "",
      password: "",
      id: "",
      chats: [],
      profileImage: "",
      whatsappStatus: "",
    });
  }

  function Logout (){
    signOut(firebaseAuth)
    .then(() => {})
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
        currentMode,
        message,
        Logout,
        addingUser,
        setMessage,
        showChat,
        setShowChat,
        showChatList,
        setShowChatList
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
