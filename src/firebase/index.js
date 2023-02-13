import { getStorage } from "firebase/storage";

import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCA42dLtpsfA3Eb1PGi2JQ4vtQg3D2wN1Q",
  authDomain: "whatsapp-clone-64e34.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-64e34-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-64e34",
  storageBucket: "whatsapp-clone-64e34.appspot.com",
  messagingSenderId: "716841857450",
  appId: "1:716841857450:web:9654a8f80bed1b1571fbd3",
  measurementId: "G-CJQVSH8B4T"
};



export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);




