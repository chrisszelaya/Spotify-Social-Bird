var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var auth = require('./auth')
var dotenv = require('dotenv').config()

router.get('/', async (req, res, next) => {
    try{
        console.log(req.query.token)
        //const url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=5'
        const url = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=30&time_range=medium_term'
        const data = await fetch(url, {headers: {
            'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log(err))
            .then(res=> res.json())
            .then(data => data)

        res.status(200).send(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.get('/month', async (req, res, next) => {
    try{
        console.log(req.query.token)
        //const url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=5'
        const url = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=30&time_range=short_term'
        const data = await fetch(url, {headers: {
            'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log(err))
            .then(res=> res.json())
            .then(data => data)

        res.status(200).send(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.get('/year', async (req, res, next) => {
    try{
        console.log(req.query.token)
        //const url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=5'
        const url = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=30&time_range=medium_term'
        const data = await fetch(url, {headers: {
            'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log(err))
            .then(res=> res.json())
            .then(data => data)

        res.status(200).send(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.get('/alltime', async (req, res, next) => {
    try{
        console.log(req.query.token)
        //const url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=5'
        const url = 'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=30&time_range=long_term'
        const data = await fetch(url, {headers: {
            'Authorization': 'Bearer ' + req.query.token
        }}).catch(err=> console.log(err))
            .then(res=> res.json())
            .then(data => data)

        res.status(200).send(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router;