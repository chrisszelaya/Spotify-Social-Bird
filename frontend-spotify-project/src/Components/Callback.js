import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { push } from 'react-router-dom'
import HomePage from './SavedSongs';

function Callback(props) {

    const [accessToken, setAccessToken] = useState('')
    const [refreshToken, setRefreshToken] = useState('')
    const code = window.location.href.split('/')[3].split('=')[1]

    useEffect(()=> {
        // fetch('http://localhost:9000/auth/callback?code='+code).then(res => res.json()).then(data => {
        //    console.log(data)
        //    setAccessToken(data.access_token)
        //    setRefreshToken(data.refresh_token)    
        // })
        this.props.history.push('home')
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Callback;