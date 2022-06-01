import React , {useState} from 'react';
import {auth} from "./fire";
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import './Login.css';
import {BrowserRouter as Router, Switch, Route,Redirect,} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


const SignUp=()=>{
    return (
        <nav className='Spotify'>
        <header></header>
        <div className='login-form'>
            <h4 className='userLog'>User Logged In</h4>
            {user?.email}
            <h1>Log In</h1>
                <div className='form-group'>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <span className='input-icon'><i className="fa fa-envelope"> <EmailIcon/></i></span>
                </div>
                <div className='form-group'>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <span className='input-icon'><i className="fa fa-envelope"><LockIcon/></i></span>
                </div>
                <button className='login-btn'>Sign In</button>
                <Link to="/SignUp" className='signup' href="#">Don't have an account ?</Link>
                <button onClick={register} className='login-btn'>Create an Account</button>
                //<button onClick={logout} className="login-btn">Log out</button>
        </div>
        </nav>
    )

    
}