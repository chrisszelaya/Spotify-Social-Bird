const express = require("express")
const router = express.Router()
var fetch = require('node-fetch');
var dotenv = require('dotenv').config()

const redirect_uri = "http://localhost:3000/loginpage/"; 
const clientID = "e4b057a237fc49dc8253f12b03df1aa2"; 
const client_secret = "95828c0ad9fc46029d4528d017cc18ec";
const scope = 'user-read-private user-top-read user-library-read';

router.get("/user", (req, res, next) => {
    try {
        res.status(200).json({url: 'https://accounts.spotify.com/authorize?response_type=code&client_id=' + clientID + "&scope=" + scope + "&redirect_uri=" + redirect_uri})
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.get("/callback", (req, res, next) => {
    //console.log("fdjsafdsafds")
    try{
        const code = req.query.code; 
        console.log(req.query); 
        const url = "https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" + code + "&redirect_uri=" + redirect_uri; 
        console.log("what)")
        const headers = {
            'Authorization': 'Basic ' + Buffer.from(clientID + ':' + client_secret, 'utf8').toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        fetch(url, {method: 'post', headers: headers})
        .then((res) => res.json()).then((data) => {
            console.log(data); 
            obj = {
                url: 'http://localhost:3000/loginpage/', 
                token: data.access_token
            }
            return obj; 
        }).then(obj => res.json(obj))
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.get("/getArtist", (req, res, next) => {
    try{
    //console.log("THIS IS A TEST THIS IS A TEST")
    console.log(req.query)
    const headers = {
        'Authorization': "Bearer " + req.query.token,
        'Content-Type': "application/json"
    }; 
    fetch("https://api.spotify.com/v1/artists/" + req.query.artistID, {
        method: "GET", 
        headers: headers
    }).then((res) => res.json()).then((data) => res.send(data))
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.get("/getSong", (req, res, next) => {
    try{
    console.log(req.query)
    const headers = {
        'Authorization': "Bearer " + req.query.token,
        'Content-Type': "application/json"
    }; 
    fetch("https://api.spotify.com/v1/tracks/" + req.query.songID, {
        method: "GET", 
        headers: headers
    }).then((res) => res.json()).then((data) => res.send(data))
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = router; 