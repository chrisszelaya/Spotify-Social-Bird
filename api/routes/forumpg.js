const express = require("express")
const router = express.Router()
const db = require("../firebase")
const {getDocs, collection, addDoc, deleteDoc, doc, updateDoc, arrayUnion} = require("firebase/firestore")

router.get("/allForums", async (req, res, next) => {
  const forumInfo = []
//   console.log(req.query);
  const docs = await getDocs(collection(db, "forums"))
  docs.forEach((doc) => forumInfo.push({id: doc.id,...doc.data()}))
  res.json({result:forumInfo})
  // res.send(,result);
})

router.get("/allForums/:id", async (req, res, next) => {
//   console.log(req.params)  // shows the path params (stuff after /info/)
  res.sendStatus(200)  // say OK without sending data back
})
router.get("/allPosts", async (req, res, next) => {
    console.log(req.body);
    const allPosts = []
  //   console.log(req.query);
    // const doc = await getDoc(collection(db, "forums",req.forumId))
    // doc.forEach((doc) => allPosts.push({posts:doc.posts}))
    // res.json({result:allPosts})
    // console.log(allPosts)
  })


router.put("/post",(req,res,next) =>{
    const array = {
        likes:0,
        post: req.body.post,
        user:req.body.username
    };
    console.log(array)
  updateDoc(doc(db,"forums", req.body.forumId),{
    posts: arrayUnion(array
    //     [
    //     username=req.body.username,
    //     post=req.body.post
    // ]
    )
  })
  res.send("Recieved");
})

// router.delete("/delete/:id", (req,res,next) =>{
//   console.log(req.params.id)
//   deleteDoc(doc(db,"posts",req.params.id))
// })

// router.post("/post", (req, res, next) => {
//   console.log(req.body.post)
//   // const docs = await 
//   const newPost ={
//     username: req.body.username,
//     post: req.body.post,
//     likes:0
//   }
//   addDoc(collection(db,"posts"),newPost)
//   res.send("Received")
// })
module.exports = router;