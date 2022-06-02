import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DiscoverPage from './Components/DiscoverPage';
import LoginPage from './Components/LoginPage';
import Login from './Components/Login';
import ForumPage from './Components/ForumPage';
import InboxPage from './Components/InboxPage';
import SavedSongs from './Components/SavedSongs';
import TopArtistsPage from './Components/TopArtistsPage';
import TopSongsPage from './Components/TopSongsPage';
import UserProfile from './Components/UserProfile';
import IndivProfilePage from './Components/IndivProfilePage';
import IndivForumnPage from './Components/IndivForumPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path = 'discoverpage' element={<DiscoverPage/>}/>
      <Route path = 'discoverpage/indivprofilepage' element={<IndivProfilePage/>}/>
      <Route path = 'forumpage' element={<ForumPage/>}/>
      <Route path = 'forumpage/indivforumpage' element={<IndivForumnPage/>}/>
      <Route path = 'inboxpage' element={<InboxPage/>}/>
      <Route path='savedsongs' element={<SavedSongs/>}/>
      <Route path='loginpage' element={<LoginPage/>}/>
      <Route path='topartists' element={<TopArtistsPage/>}/>
      <Route path='topsongs' element={<TopSongsPage/>}/>
      <Route path='userprofile' element={<UserProfile/>}/>
    </Routes>
  </BrowserRouter>
*/


reportWebVitals();

