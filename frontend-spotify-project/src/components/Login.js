import React , {useState, useContext, useEffect} from 'react';
import {auth} from "./fire";
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import './Login.css';
import {BrowserRouter as Router, Switch, Route,Redirect,} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate} from "react-router-dom"
import {AccessTokenContext} from "./AccessTokenContext"


const LogIn=()=>{
    const { token, setAccessToken } = useContext(AccessTokenContext);
    const [email,setEmail]= useState('');
    console.log(email); 
    const [password,setPassword]= useState('');
    const [user,setUser]= useState({});
    let navigate = useNavigate(); 

    const getSpotifyInfo = async (userID) => {
        fetch("http://localhost:9000/spotify/user/")
        .then((res) => res.json())
        .then((data) => window.open(data.url))
    }

    const path = window.location.href.split('/')[4]
    let code = ''
    useEffect(() => {
        if(path){
            console.log(path); 
            code = path.split('=')[1]
            fetch('http://localhost:9000/spotify/callback?code='+code).then(res => res.json()).then(data => {
                if(data.token){
                    setAccessToken(data.token)
                    console.log(data.token)
                    navigate("../userprofile");
                }  
        })}
    }, [])

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

            const user = signInWithEmailAndPassword(auth,email,password).then((user) => {
                fetch("http://localhost:9000/login/userFromEmail/" + email).then((res) => res.json()).then((text) => getSpotifyInfo(text.id))
            })

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
                <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>{{
                    console.log(e.target.value); 
                    setEmail(e.target.value); 
                }}}/>
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