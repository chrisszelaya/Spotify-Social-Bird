// import logo from './logo.svg';
import {Link} from "react-router-dom";
import LogIn from "./components2/Login";
import './App.css';
import React , {useState}from 'react';
    // import {auth} from "./Components/fire";
    // import {createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
    // import LogIn from './Components/Login';

function App() {
  return (
    <div className="App">
      <h1>Home (for now)</h1>
      <nav>
      <Link to='/loginpage'> Login Page</Link>
      <br></br>
      <Link to='/userprofile'>User Profile</Link>
      <br></br>
      <Link to='/discoverpage'>Discover Page</Link>
      <br></br>
      <Link to='/forumpage'>Forum Page</Link>
      <br></br>
      <Link to='/inboxpage'>Inbox Page</Link>
      <br></br>
      <Link to='/likedsongs'>Liked Songs</Link>
      <br></br>
      <Link to='/topartists'>Top Artists</Link>
      <br></br>
      <Link to='/topsongs'>Top Songs</Link>
      </nav>
    </div>
  );
}

export default App;