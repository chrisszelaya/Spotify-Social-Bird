import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAeTznWxApuoiaPDkzRCTgYaR8KHIqM5nU",
  authDomain: "spotify-project-b5c5a.firebaseapp.com",
  projectId: "spotify-project-b5c5a",
  storageBucket: "spotify-project-b5c5a.appspot.com",
  messagingSenderId: "89740831195",
  appId: "1:89740831195:web:7a9fd26aea68c01c185ffe",
  measurementId: "G-29XCFT3Y3V"
  };
  
  // Initialize Firebase
  const app =initializeApp(firebaseConfig);
  export const auth= getAuth(app);