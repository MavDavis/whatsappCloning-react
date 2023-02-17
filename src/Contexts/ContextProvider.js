import React, { useState, createContext, useContext, useEffect } from "react";

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
import { signOut, onAuthStateChanged } from "firebase/auth";
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
  const [loading, setLoading] = useState(true);
  const [openedChat, setOpenedChat] = useState(false);
  const [currentOpenedChat, setCurrentOpenedChat] = useState(null);
  const [currentMode, setCurrentMode] = useState("Dark");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [showChatList, setShowChatList] = useState(true);
  const [chatList, setChatList] = useState(exportedChat);
  const [formDetails, setFormDetails] = useState({
    Name: "",
    email: "",
    password: "",
    dates: "1",
    years: "January",
    months: "1960",
  });
  async function userDetail() {
    const user = firebaseAuth.currentUser;
    const docRef = doc(db, "User", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
      setLoggedIn(true);

      setLoading(false);
    }
  }
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        userDetail();
      } else {
        setLoggedIn(false);
        setLoading(false);
      }
    });
  }, []);

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
    const newList = chatList.map((chat) =>
      chat.userId === currentOpenedChat.userId ? currentOpenedChat : chat
    );
    setChatList(newList);
  };
  const emailSignup = () => {
    const { email, password, Name } = formDetails;
    let str = Name.trim().split(/\s+/);

    createUserWithEmailAndPassword(firebaseAuth, email, password).then(
      (userCredential) => {
        setDoc(doc(db, "User", userCredential.user.uid.toString()), {
          Fullname: Name,
          Username: str[0],
          age: "",
          DOB: "",
          Email: email,
          password: password,
          id: userCredential.user.uid.toString(),
          chats: [],
          profileImage: "",
          whatsappStatus: "",
        }).then(() => {
          getDoc(doc(db, "User", userCredential.user.uid.toString())).then(
            (item) => setUser(item.data())
          );
        });
      }
    );
  };
  async function addingUser(res) {
    const { displayName, email, uid, photoURL } = res.user;
    const docRef = doc(db, "User", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser(docSnap.data());
    } else {
      setDoc(doc(db, "User", uid), {
        Fullname: displayName,
        Username: res._tokenResponse.firstName,
        age: "",
        DOB: "",
        Email: email,
        password: "",
        id: uid,
        chats: [],
        profileImage: photoURL,
        whatsappStatus: "",
      });
    }
  }
  function googleSignIn() {
    let res = "";
    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        res = result;
      })
      .then(() => {
        addingUser(res);
      })
      .then(() => {
        getDoc(doc(db, "User", res.user.uid)).then((item) =>
          setUser(item.data())
        );
      });
  }
  function logout() {
    signOut(firebaseAuth).then(() => {
      console.log("loggedout");
      setLoggedIn(false);
    });
  }
  const login = () => {
    const { email, password } = formDetails;

    signInWithEmailAndPassword(firebaseAuth, email, password).then((res)=>{
      getDoc(doc(db, "User", res.user.uid)).then((item) =>
      setUser(item.data())
    );
  });
  };
  return (
    <StateContext.Provider
      value={{
        openedChat,
        chatList,
        user,
        login,
        emailSignup,
        setChatList,
        setOpenedChat,
        formDetails,
        setFormDetails,
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
        loading,
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
