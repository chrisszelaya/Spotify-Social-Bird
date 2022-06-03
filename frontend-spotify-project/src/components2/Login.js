import React , {useState} from 'react';
import {auth} from "./fire";
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import './Login.css';
import {BrowserRouter as Router, Switch, Route,Redirect,} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


const LogIn=()=>{
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [user,setUser]= useState({});

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    
        
    })
    
    const register= async(e)=>{
        e.preventDefault();
        try{

            const user = createUserWithEmailAndPassword(auth,email,password);
            console.log(user);

        }catch(error){
            alert(error.message)
        }

    }

    const login= async(e)=>{
        e.preventDefault();
        try{

            const user = signInWithEmailAndPassword(auth,email,password);
            console.log(user);

        }catch(error){
            alert(error.message)
        }

    }

    const logout= async (e)=>{
        e.preventDefault();
        await signOut(auth);


    }

    return (
        <nav className='Spotify'>
            <div className='Title'>Spotify <button onClick={logout} className="logout">Log out</button>
            </div>
        <div className='login-form'>
            <h1>Log In</h1>
                <div className='form-group'>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <span className='input-icon'><i className="fa fa-envelope"> <EmailIcon/></i></span>
                </div>
                <div className='form-group'>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <span className='input-icon'><i className="fa fa-envelope"><LockIcon/></i></span>
                </div>
                <button onClick={login} className='login-btn'>Sign In</button>
                <a className='signup' href="#">Don't have an account ?</a>
                <button onClick={register} className='login-btn'>Create an Account</button>
        </div>
        </nav>
    )



}




export default LogIn