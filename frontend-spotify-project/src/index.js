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
import TrueHome from "./Components/TrueHome"
import UserProfile from './Components/UserProfile';
import IndivProfilePage from './Components/IndivProfilePage';
import IndivForumnPage from './Components/IndivForumPage';
import AccessTokenProvider from './Components/AccessTokenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AccessTokenProvider>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/> 
      <Route path='/truehome' element={<TrueHome/>}/> 
      <Route path='/topsongs' element={<TopSongsPage/>}/>
      <Route path='/topartists' element={<TopArtistsPage/>}/>
      <Route path='/savedsongs' element={<SavedSongs/>}/>
      <Route path='/discoverpage' element={<DiscoverPage/>}/>
      <Route path='/discoverpage/indivprofilepage' element={<IndivProfilePage/>}/>
      <Route path='/forumpage' element={<ForumPage/>}/>
      <Route path='/forumpage/indivforumpage' element={<IndivForumnPage/>}/>
      <Route path='/inboxpage' element={<InboxPage/>}/>
      <Route path='/loginpage' element={<LoginPage/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
    </Routes>
  </BrowserRouter>
  </AccessTokenProvider>
);

reportWebVitals();

