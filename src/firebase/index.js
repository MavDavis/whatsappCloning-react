import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
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
const app = initializeApp(firebaseConfig);
const Database = ()=>{
return getDatabase(app)
}
const Auth = ()=>{
  return getAuth(app)
}
export  {Database, Auth}




