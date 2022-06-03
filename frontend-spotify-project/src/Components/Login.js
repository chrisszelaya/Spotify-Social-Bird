import React , {useState, useContext, useEffect} from 'react';
import {auth} from "./fire";
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import './Login.css';
import {BrowserRouter as Router, Switch, Route,Redirect,} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate} from "react-router-dom"
import {AccessTokenContext} from "./AccessTokenContext"
import axios from 'axios';
import Bird from './image/bird.PNG'


const LogIn=()=>{
    const { token, setAccessToken, user, setUser } = useContext(AccessTokenContext);
    const [email,setEmail]= useState('');
    const [usernameForm, setUsernameForm] = useState(""); 
    const [spotifyID, setSpotifyID] = useState(""); 
    const [statusText, setStatusText] = useState(""); 
    const [accountCreationScreen, setAccountCreationScreen] = useState(false); 
    console.log(token);
    const [password,setPassword]= useState('');
    console.log(user)
    let navigate = useNavigate(); 

    const getSpotifyInfo = async () => {
        fetch("http://localhost:9000/spotify/user/")
        .then((res) => res.json())
        .then((data) => window.open(data.url))
    }

    const path = window.location.href.split('/')[4]
    let code = ''
    if(token=="" && !path) {
        getSpotifyInfo(); 
    }
    useEffect(() => {
        if(path){
            console.log(path); 
            code = path.split('=')[1]
            fetch('http://localhost:9000/spotify/callback?code='+code).then(res => res.json()).then(data => {
                if(data.token){
                    setAccessToken(data.token)
                    console.log(data.token)
                    console.log(user); 
                }  
        })}
    }, [])

    // onAuthStateChanged(auth,(currentUser)=>{
    //     setUser(currentUser);
    
        
    // })
    
    const register= async(e)=>{
        e.preventDefault();
        try{

            const hi = createUserWithEmailAndPassword(auth,email,password).then((f) => {
                const userName = email.split("@")[0]; 
                axios.post("http://localhost:9000/login/createAccount", {
                    email: email, 
                    username: userName,
                }).then((res) => {setStatusText("Account created! You may now log in."); setEmail(""); setPassword(""); setAccountCreationScreen(true); setUser(res.data); console.log(res.data)})
            })



        }catch(error){
            alert(error.message)
        }

    }

    const updateAccount = async(e) => {
        e.preventDefault(); 
        console.log(user);
        await axios.put("http://localhost:9000/login/updateAccount", {
            username: usernameForm, 
            spotifyID: spotifyID, 
            id: user
        }) 
        console.log("returning...")
        setAccountCreationScreen(false);
    }

    const login= async(e)=>{
        e.preventDefault();
        try{

            const hi = signInWithEmailAndPassword(auth,email,password).then((d) => {
                fetch("http://localhost:9000/login/userFromEmail/" + email).then((res) => res.json()).then((text) => {
                    setUser(text.id);
                    navigate("../truehome");
                })
            })

        }catch(error){
            alert(error.message)
        }

    }

    const logout= async (e)=>{
        e.preventDefault();
        await signOut(auth);


    }
    if(!accountCreationScreen) {
    return (
        <nav className='Spotify'>
            <div className="header">
            <h1 className='logotitle'>Social Song Bird</h1>
            <img className='Logo' src={Bird} ></img>
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
                <p></p>
                <button onClick={register} className='login-btn'>Create an Account</button>
                <p>{statusText}</p>
        </div>
        </nav>
    )}
    else {
        return(
            <div>
                <div className='form-group'>
                <input type="text" placeholder="Enter Username" value={usernameForm} onChange={(e)=>{{
                    console.log(e.target.value); 
                    setUsernameForm(e.target.value); 
                }}}/>
                </div>
                <button onClick={updateAccount} className='login-btn'>Create</button>
            </div>
        ); 
    }



}




export default LogIn;