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
  const [chatMessage, setChatMessage] = useState("");
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [showChatList, setShowChatList] = useState(true);
  const [chatList, setChatList] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [sidebarChat, setSidebarChat] = useState(true);
  const [sidebarFriends, setSidebarFriends] = useState(false);
  const [sidebarProfile, setSidebarProfile] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);
  const [currentOpenedChatModal, setCurrentOpenedChatModal] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false)
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
  useEffect(() => {
    getAllUsers();
  }, [user]);
  const getAllUsers = () => {
    const q = query(collection(db, "User"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        if (doc.id != user.id) {
          array.push(doc.data());
        }
      });
      setFriendList(array);
    });
  };
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
    const chat = chatList.find((chat) => chat.id === id);
    setCurrentOpenedChat(chat);
    setShowEmoji(false)

  };
  const sendMessage = () => {
    let newMessage = {
      id: user.id,
      message: chatMessage,
      time: Timestamp.fromDate(new Date()),
    };
    setCurrentOpenedChat((prev) => {
      return { ...prev, message: [...prev.message, newMessage] };
    });

    const userId = user.id;
    const friendsId = currentOpenedChat.id;
    let userIdAndFriendsId = `${userId}${friendsId}`;
    let friendsIdUserId = `${friendsId}${userId}`;
    functionForSendingMessage(
      user,
      currentOpenedChat,
      userIdAndFriendsId,
      friendsIdUserId
    );
    functionForSendingMessage(
      currentOpenedChat,
      user,
      userIdAndFriendsId,
      friendsIdUserId
    );
  };
  const functionForSendingMessage = async (users, users2, id1, id2) => {
    let newMessage = {
      id: user.id,
      message: chatMessage,
      time: Timestamp.fromDate(new Date()),
    };
    let { Fullname, Username, id, profileImage } = users2;

    setChatMessage("");
    const person = doc(db, "User", users.id);
    const fetchPerson = await getDoc(person);
    let { chats } = fetchPerson.data();
    let aNewChatArray = [];
    if (chats.length <= 0) {
      let NewPerson = {
        Fullname,
        Username,
        id,
        profileImage,
        chatId: id1,
        message: [newMessage],
      };
      await updateDoc(person, { chats: [NewPerson] });
    } else {
      const foundChat = chats.find(
        (item) => item.chatId === id1 || item.chatId === id2
      );
      if (foundChat) {
        // update the message of the users
        let NewPerson = chats.map((chat) =>
          chat.chatId === id1 || chat.chatId === id2
            ? { ...chat, message: [...chat.message, newMessage] }
            : chat
        );
        await updateDoc(person, { chats: NewPerson });
      } else {
        // create a new chat and add to the chats
        let NewPerson = {
          Fullname,
          Username,
          id,
          profileImage,
          chatId: id1,
          message: [newMessage],
        };
        await updateDoc(person, { chats: [...chats, NewPerson] });
      }
    }
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
    let messageToShow = [];
    if (chat.chats.length > 0) {
      const userId = user.id;
      const friendsId = chat.id;
      let id1 = `${userId}${friendsId}`;
      let id2 = `${friendsId}${userId}`;
      let checkIfMyMessageExist = chat.chats.find(
        (item) => item.chatId === id1 || item.chatId === id2
      );
      if (checkIfMyMessageExist) {
        let conforming = user.chats.find((item) => item.id === id);
        if (conforming === undefined) {
          messageToShow = [];
        }else{
        messageToShow = (conforming.message);
        }
        // checkIfMyMessageExist.message
      } else {
        messageToShow = [];
      }
    } else {
      messageToShow = [];
    }
    let newObj = {
      Fullname: chat.Fullname,
      Username: chat.Username,
      id: chat.id,
      profileImage: chat.profileImage,
      message: messageToShow,
    };
    setCurrentOpenedChat(newObj);
    sidebarToShow("chat");
    setShowEmoji(false)
  };
  const clearAllMessages = async () => {
    let found = user.chats.find((item) => item.id === currentOpenedChat.id);
    found = { ...found, message: [] };
    let updatedChat = user.chats.map((item) =>
      item.id === currentOpenedChat.id ? found : item
    );
    if (currentOpenedChat.id !== 0 && currentOpenedChat.id !== 1) {
      const person = doc(db, "User", user.id);
      await updateDoc(person, { chats: updatedChat });
      setCurrentOpenedChat((prev) => ({ ...prev, message: [] }));
    }
  };
  const deleteAChat = async () => {
    const person = doc(db, "User", user.id);

    let found = user.chats.filter((item) => item.id !== currentOpenedChat.id);
    if (currentOpenedChat.id !== 0 && currentOpenedChat.id !== 1) {
      await updateDoc(person, { chats: found });
    }
    setOpenedChat(false);
    setCurrentOpenedChat({});
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
        chatMessage,
        logout,
        addingUser,
        setChatMessage,
        showChat,
        setShowChat,
        loggedIn,
        loading,
        setLoggedIn,
        showChatList,
        googleSignIn,
        setShowChatList,
        startNewChat,
        settingsModal,
        setSettingsModal,
        currentOpenedChatModal,
        setCurrentOpenedChatModal,
        clearAllMessages,
        deleteAChat,
        showEmoji,
         setShowEmoji
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
