import React, { useState, createContext, useContext, useEffect } from "react";

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
  const [currentOpenedChat, setCurrentOpenedChat] = useState({});
  const [currentMode, setCurrentMode] = useState("Dark");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [showChatList, setShowChatList] = useState(true);
  const [chatList, setChatList] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [sidebarChat, setSidebarChat] = useState(true);
  const [sidebarFriends, setSidebarFriends] = useState(false);
  const [sidebarProfile, setSidebarProfile] = useState(false);
  const [settingsModal, setSettingsModal] = useState(true);
  const sidebarToShow = (res) => {
    if (res === "chat") {
      setSidebarChat(true);
      setSidebarFriends(false);
      setSidebarProfile(false);
    } else if (res === "friends") {
      setSidebarChat(false);
      setSidebarFriends(true);
      setSidebarProfile(false);
    } else if (res === "profile") {
      setSidebarChat(false);
      setSidebarFriends(false);
      setSidebarProfile(true);
    }
  };
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
    const unsub = onSnapshot(doc(db, "User", user.uid), (doc) => {
      setUser(doc.data());
      setLoggedIn(true);

      setLoading(false);
      setChatList(doc.data().chats);
    });
  }
  const getAllUsers = () => {
    const q = query(collection(db, "User"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.data());
      });
      console.log(array);
      setFriendList(array);
    });
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        userDetail();
        getAllUsers();
      } else {
        setLoggedIn(false);
        setLoading(false);
      }
    });
  }, []);

  const openChat = (id) => {
    const chat = chatList.find((chat) => chat.id === id);
    setCurrentOpenedChat(chat);
  };
  const sendMessage = () => {
    const newMessage = { id: user.id, message, time: new Date() };
    setMessage("");
    setCurrentOpenedChat((prev) => {
      return { ...prev, message: [...prev.message, newMessage] };
    });
    const newList = chatList.map((chat) =>
      chat.id === currentOpenedChat.id ? currentOpenedChat : chat
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
          chats: [
            {
              Fullname: "Admin",
              Username: "Mavdavis",
              id: 0,
              message: [
                { id: 0, message: "hy", time: "02-sept,2023" },
                {
                  id: 0,
                  message: "This is for test. Admin has no database",
                  time: "02-sept,2023",
                },
                {
                  id: userCredential.user.uid.toString(),
                  message: "Click on the envelope icon",
                  time: "02-sept,2023",
                },
                {
                  id: 0,
                  message: "Search for davids and senme a dm!",
                  time: "02-sept,2023",
                },
              ],
              profileImage: "",
            },
            {
              Fullname: "Admin2",
              Username: "David",
              id: 1,
              message: [
                { id: 1, message: "hy", time: "02-sept,2023" },
                {
                  id: 1,
                  message: "This is for test. Admin has no database",
                  time: "02-sept,2023",
                },
                {
                  id: userCredential.user.uid.toString(),
                  message: "Click on the envelope icon",
                  time: "02-sept,2023",
                },
                {
                  id: 1,
                  message: "Search for davids and senme a dm!",
                  time: "02-sept,2023",
                },
                { id: 1, message: "hy", time: "02-sept,2023" },
                {
                  id: 1,
                  message: "This is for test. Admin has no database",
                  time: "02-sept,2023",
                },
                {
                  id: userCredential.user.uid.toString(),
                  message: "Click on the envelope icon",
                  time: "02-sept,2023",
                },
                {
                  id: 1,
                  message: "Search for davids and senme a dm!",
                  time: "02-sept,2023",
                },
                { id: 1, message: "hy", time: "02-sept,2023" },
                {
                  id: 1,
                  message:
                    ".This is for test. Admin has no databaseThis is for test. Admin has no databaseThis is for test. Admin has no database",
                  time: "02-sept,2023",
                },
                {
                  id: userCredential.user.uid.toString(),
                  message: "Click on the envelope icon",
                  time: "02-sept,2023",
                },
                {
                  id: 1,
                  message: "Search for davids and senme a dm!",
                  time: "02-sept,2023",
                },
              ],
              profileImage: "",
            },
          ],
          profileImage: "",
          whatsappStatus: "default Status",
        }).then(() => {
          getDoc(doc(db, "User", userCredential.user.uid.toString())).then(
            (item) => {
              setUser(item.data());
            }
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
        chats: [
          {
            Fullname: "Admin",
            Username: "Mavdavis",
            id: 0,
            message: [
              { id: 0, message: "hy", time: "02-sept,2023" },
              {
                id: 0,
                message: "This is for test. Admin has no database",
                time: "02-sept,2023",
              },
              {
                id: uid,
                message: "Click on the envelope icon",
                time: "02-sept,2023",
              },
              {
                id: 0,
                message:
                  "Just for testing message, you cannot send a message to an admin. click on the chat icon and send a user a message now.",
                time: "02-sept,2023",
              },
            ],
            profileImage: "",
          },
          {
            Fullname: "Admin2",
            Username: "Davids",
            id: 1,
            message: [
              { id: 1, message: "hy", time: "02-sept,2023" },
              {
                id: 1,
                message: "This is for test. Admin has no database",
                time: "02-sept,2023",
              },
              {
                id: uid,
                message: "Click on the envelope icon",
                time: "02-sept,2023",
              },
              {
                id: 1,
                message: "Search for davids and senme a dm!",
                time: "02-sept,2023",
              },
              { id: 1, message: "hy", time: "02-sept,2023" },
              {
                id: 1,
                message: "This is for test. Admin has no database",
                time: "02-sept,2023",
              },
              {
                id: uid,
                message: "Click on the envelope icon",
                time: "02-sept,2023",
              },
              {
                id: 1,
                message: "Search for davids and senme a dm!",
                time: "02-sept,2023",
              },
              { id: 1, message: "hy", time: "02-sept,2023" },
              {
                id: 1,
                message:
                  ".This is for test. Admin has no databaseThis is for test. Admin has no databaseThis is for test. Admin has no databaseThis is for test. Admin has no database.",
                time: "02-sept,2023",
              },
              {
                id: uid,
                message:
                  "Just for testing message, you cannot send a message to an admin. click on the chat icon and send a user a message now.",
                time: "02-sept,2023",
              },
              {
                id: 1,
                message:
                  "Just for testing message, you cannot send a message to an admin. click on the chat icon and send a user a message now.",
                time: "02-sept,2023",
              },
            ],
            profileImage: "",
          },
        ],
        profileImage: photoURL,
        whatsappStatus: "default status",
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
        getDoc(doc(db, "User", res.user.uid)).then((item) => {
          setUser(item.data());
        });
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

    signInWithEmailAndPassword(firebaseAuth, email, password).then((res) => {
      getDoc(doc(db, "User", res.user.uid)).then((item) =>
        setUser(item.data())
      );
    });
  };
  const startNewChat = (id) => {
    const chat = friendList.find((chat) => chat.id === id);
    let newObj = {
      Fullname: chat.Fullname,
      Username: chat.Username,
      id: chat.id,
      profileImage: chat.profileImage,
      message: [],
    };
    setCurrentOpenedChat(newObj)
    sidebarToShow('chat')
  };
  return (
    <StateContext.Provider
      value={{
        openedChat,
        chatList,
        friendList,
        user,
        sidebarToShow,
        sidebarChat,
        sidebarFriends,
        sidebarProfile,
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
        startNewChat
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
