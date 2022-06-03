const express = require("express")
const router = express.Router()
const db = require("../firebase")
const {getDocs, collection, addDoc, deleteDoc, doc, updateDoc, arrayUnion, getDoc} = require("firebase/firestore")
const { async } = require("@firebase/util")

router.get("/allForums", async (req, res, next) => {
  const forumInfo = []
//   console.log(req.query);
  const docs = await getDocs(collection(db, "forums"))
  docs.forEach((doc) => forumInfo.push({id: doc.id,...doc.data()}))
  res.json({result:forumInfo})
  // res.send(,result);
})
// /newForum
router.post("/newForum", (req, res, next) => {
  // console.log(req.body.topic)
  const newForum ={
    author: req.body.username,
    topic: req.body.topic,
    posts:[]
  }
  addDoc(collection(db,"forums"),newForum)
  res.send("Received")
})

router.get("/allPosts/:id", async (req, res, next) => {
    // console.log(req.params.id);
    // const allPosts = [];
    const docSnap = await getDoc(doc(db,"forums", req.params.id));
    if(docSnap.exists()){
      console.log(docSnap.data().posts);
    }
    else{
      console.log("No such Doc");
    }
    res.json({result:docSnap.data().posts})
    // console.log(docSnap.data())
  })
router.put("/post", async(req,res,next) =>{
    const array = {
        likes:0,
        post: req.body.post,
        user:req.body.username
    };
    console.log(array)
  updateDoc(doc(db,"forums", req.body.forumId),{
    posts: arrayUnion(array)
  })
  res.send("Recieved");
})

// router.put('/updateLikes/:id',async(req,res,next) =>{
//   const docSnap = await getDoc(doc(db,"forums", req.params.id));
//   const allPosts = [];
//   if(docSnap.exists()){
//     docSnap.data().posts.map((e) =>{
//       if(e.post === req.params.post){
        
//       }
//     })
//   }
//   console.log(req.params.id);
//   const postsRef = doc(db,"forums", forumID);
//   updateDoc(postsRef,{
//     likes:arrayUnion()
//   })
// })

// router.get("/allUserInfo", async (req, res, next) => {
//   const userInfo = []
//   const docs = await getDocs(collection(db, "users"))
//   docs.forEach((doc) => userInfo.push({id: doc.id,...doc.data()}))
//   res.json({result:userInfo})
// })

module.exports = router;