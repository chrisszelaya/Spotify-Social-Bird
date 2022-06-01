import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DiscoverPage from './Components/DiscoverPage';
import LoginPage from './Components/LoginPage';
import ForumnPage from './Components/ForumnPage';
import InboxPage from './Components/InboxPage';
import LikedSongs from './Components/LikedSongs';
import TopArtistsPage from './Components/TopArtistsPage';
import TopSongsPage from './Components/TopSongsPage';
import UserProfile from './Components/UserProfile';
import IndivProfilePage from './Components/IndivProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>}/>
      <Route path = 'discoverpage' element={<DiscoverPage/>}/>
      <Route path = 'discoverpage/indivprofilepage' element={<IndivProfilePage/>}/>
      <Route path = 'forumnpage' element={<ForumnPage/>}/>
      <Route path = 'inboxpage' element={<InboxPage/>}/>
      <Route path='likedsongs' element={<LikedSongs/>}/>
      <Route path='loginpage' element={<LoginPage/>}/>
      <Route path='topartists' element={<TopArtistsPage/>}/>
      <Route path='topsongs' element={<TopSongsPage/>}/>
      <Route path='userprofile' element={<UserProfile/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

