const express = require("express")
const router = express.Router()
const db = require("../firebase")
const {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} = require("firebase/firestore")

router.get("/allUserInfo", async (req, res, next) => {
  console.log(req.query)
  const userInfo = []
  const docs = await getDocs(collection(db, "users"))
  docs.forEach((doc) => userInfo.push({id: doc.id, ...doc.data()}))
  res.json({result:userInfo})
  // res.send(,result);
})

router.get("/allUserInfo/:id", async (req, res, next) => {
  console.log(req.params)  // shows the path params (stuff after /info/)
  res.sendStatus(200)  // say OK without sending data back
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