import {initializeApp} from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyAERbkf_WM0i6KKqH4NwtmITNh7vZPZnXk",
    authDomain: "spotifylog-d496a.firebaseapp.com",
    projectId: "spotifylog-d496a",
    storageBucket: "spotifylog-d496a.appspot.com",
    messagingSenderId: "586986787075",
    appId: "1:586986787075:web:fb4541b1c7952081109936"
  };
  
  // Initialize Firebase
  const fire =initializeApp(firebaseConfig);

  export default fire