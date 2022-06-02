// import logo from './logo.svg';
import {Link} from "react-router-dom";
import './App.css';
import React from 'react'
import Login from './Components/Login'
import Callback from './Components/Callback'
import SavedSongs from './Components/SavedSongs'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AccessTokenProvider from './Contexts/accessTokenContext'
import TopSongsPage from './Components/TopSongsPage'
import TopArtistsPage from './Components/TopArtistsPage'
import TrueHome from './Components/TrueHome'
import DiscoverPage from './Components/DiscoverPage';
import LoginPage from './Components/LoginPage';
import ForumPage from './Components/ForumPage';
import InboxPage from './Components/InboxPage';
import UserProfile from './Components/UserProfile';
import IndivProfilePage from './Components/IndivProfilePage';
import IndivForumnPage from './Components/IndivForumPage';

function App() {
  const jsx =
  <AccessTokenProvider>
  <BrowserRouter >
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
  return (
    <>
    {jsx}
    </>
  );
}

export default App;