const express = require("express")
const router = express.Router()
const db = require("../firebase")
const {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} = require("firebase/firestore")

router.get("/allUserInfo", async (req, res, next) => {
  const userInfo = []
  const docs = await getDocs(collection(db, "users"))
  docs.forEach((doc) => userInfo.push({id: doc.id,...doc.data()}))
  res.json({result:userInfo})
  // res.send(,result);
})

// router.get("/allUserInfo/:id", async (req, res, next) => {
//   getDoc(doc(db, "users", req.params.id))
//   .then((doc) => {res.send(doc.data())})
// })

router.put("/addSong/:userID/:songID", (req, res, next) => {
  const newRef = doc(db, "users", req.params.userID);
  console.log(req.params)
    getDoc(newRef)
    .then((doc) =>{
        let curSongs = doc.data().displayedSongIDs; 
        if(!curSongs) {
          curSongs = [];
        }
        curSongs.push(req.params.songID)
        updateDoc(newRef, {
            displayedSongIDs: curSongs
        }).then(res.send("success"))
    })
})

router.put("/addArtist/:userID/:artistID", (req, res, next) => {
  const newRef = doc(db, "users", req.params.userID);
  console.log(req.params)
    getDoc(newRef)
    .then((doc) =>{
        let curArtists = doc.data().displayedArtistIDs; 
        if(!curArtists) {
          curArtists = [];
        }
        curArtists.push(req.params.artistID)
        updateDoc(newRef, {
            displayedArtistIDs: curArtists
        }).then(res.send("success"))
    })
})

router.put("/removeSong/:userID/:songID", (req, res, next) => {
  const newRef = doc(db, "users", req.params.userID);
  console.log(req.params)
    getDoc(newRef)
    .then((doc) =>{
        let curSongs = doc.data().displayedSongIDs; 
        if(!curSongs) {
          curSongs = [];
        }
        let newArray = []; 
        for(let x = 0; x < curSongs.length; x++) {
          if(curSongs[x] != req.params.songID) {
            console.log(curSongs[x])
            newArray.push(curSongs[x])
          }
        }
        updateDoc(newRef, {
            displayedSongIDs: newArray
        }).then(res.send("success"))
    })
})

router.put("/removeArtist/:userID/:artistID", (req, res, next) => {
  const newRef = doc(db, "users", req.params.userID);
  console.log(req.params)
    getDoc(newRef)
    .then((doc) =>{
        let curArtists = doc.data().displayedArtistIDs; 
        if(!curArtists) {
          curArtists = [];
        }
        let newArray = []; 
        for(let x = 0; x < curArtists.length; x++) {
          if(curArtists[x] != req.params.artistID) {
            console.log(curArtists[x])
            newArray.push(curArtists[x])
          }
        }
        updateDoc(newRef, {
            displayedArtistIDs: newArray
        }).then(res.send("success"))
    })
})
// router.put("/edit",(req,res,next) =>{
//   // console.log(req.body)
//   updateDoc(doc(db,"posts", req.body.messageId),{
//     username:req.body.username,
//     message:req.body.message
//   })
// })

// router.delete("/delete/:id", (req,res,next) =>{
//   console.log(req.params.id)
//   deleteDoc(doc(db,"posts",req.params.id))
// })

// router.post("/post", (req, res, next) => {
//   console.log(req.body.message)
//   // const docs = await 
//   const newPost ={
//     username: req.body.username,
//     message: req.body.message
//   }
//   addDoc(collection(db,"posts"),newPost)
//   // .then((docRef) =>{
//   //   setP
//   // })
//   res.send("Received")
// })
module.exports = router;