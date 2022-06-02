import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();
    const { accessToken, setAccessToken } = useContext(AccessTokenContext);
    
    const onClick = (e) => {
        fetch("http://localhost:9000/auth").then(res => res.json())
        .then(data => {
            window.open(data.url)
        })
    }

    const path = window.location.href.split('/')[3]
    let code = ''
    useEffect(()=> {
        if(path){
            code = path.split('=')[1]
            fetch('http://localhost:9000/auth/callback?code='+code).then(res => res.json()).then(data => {
                if(data.token){
                    setAccessToken(data.token)
                    //console.log(data.token)
                    navigate('/truehome')
                }
               
        })
    }
    }, [])

    return (
        <div>
            <button onClick={(e) => onClick(e)}>
                Log in to App
            </button>
        </div>
    )
}

export default Login;