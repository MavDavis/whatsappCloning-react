import React, { useState, createContext, useContext } from "react";
import { exportedChat } from "../assets/dummyData";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [showChatList, setShowChatList] = useState(true);
  const [chatList, setChatList] = useState(exportedChat);
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
    const newList = chatList.map((chat) => chat.userId === currentOpenedChat.userId ? currentOpenedChat : chat);
    setChatList(newList)
    
  };

  function addingUser({res}) {
    const {displayName, email, firstName, localId, photoUrl} = res.user
    setDoc(doc(db, "User", localId), {
      Fullname: displayName,
      Username: firstName,
      age: "",
      DOB: "",
      Email:email,
      password: "",
      id:localId,
      chats: [],
      profileImage: photoUrl,
      whatsappStatus: "",
    });
  }
function googleSignIn(){
  let res = "";
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      res = result;
    })
    .then(() => {
addingUser()
    })
}
  function logout() {
    signOut(firebaseAuth).then(() => {
      console.log('loggedout');
    });
  }
  return (
    <StateContext.Provider
      value={{
        openedChat,
        chatList,
        setChatList,
        setOpenedChat,
        currentOpenedChat,
        setCurrentOpenedChat,
        openChat,
        sendMessage,
        currentMode,
        message,
        logout,
        addingUser,
        setMessage,
        showChat,
        setShowChat,
        loggedIn,
        setLoggedIn,
        showChatList,
        googleSignIn,
        setShowChatList,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
