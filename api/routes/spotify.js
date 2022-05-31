const express = require("express")
const router = express.Router()
const db = require("./firebase")

const {getDocs, collection} = require("firebase/firestore")

router.get("/user", (req, res, next) => {
    res.send("ok")
})