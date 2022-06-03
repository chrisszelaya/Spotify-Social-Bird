import React from 'react'
import { AccessTokenContext } from './AccessTokenContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom";

function TrueHome() {
    
    const { token } = useContext(AccessTokenContext);;

    console.log(token);
    return (
        <div className="App">
            <h1>Home (for now)</h1>
            <h2>we got all sorts of goodies lined up here</h2>
            <nav>
                <Link to='/loginpage'> Login Page</Link>
                <br></br>
                <Link to='/userprofile'>User Profile</Link>
                <br></br>
                <Link to='/discoverpage'>Discover Page</Link>
                <br></br>
                <Link to='/forumpage'>Forum Page</Link>
                <br></br>
                <Link to='/savedsongs'>Saved Songs</Link>
                <br></br>
                <Link to='/topartists'>Top Artists</Link>
                <br></br>
                <Link to='/topsongs'>Top Songs</Link>
            </nav>   
      </div>
    )
}

export default TrueHome;