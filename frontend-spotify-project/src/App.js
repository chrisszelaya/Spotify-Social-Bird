import React , {useState}from 'react';
import {auth} from "./components/fire";
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import LogIn from './components/Login';


function App(){

    return (
        <div className='App'>
            <LogIn/>
       
        </div>
    )



}

export default App;