const express = require("express")
const router = express.Router()
const db = require("../firebase")
const {getDocs, collection, addDoc, deleteDoc, doc, updateDoc, getDoc} = require("firebase/firestore")

router.get("/allUserInfo", async (req, res, next) => {
  const userInfo = []
  const docs = await getDocs(collection(db, "users"))
  docs.forEach((doc) => userInfo.push({id: doc.id,...doc.data()}))
  res.json({result:userInfo})
  // res.send(,result);
})

router.get("/allUserInfo/:id", async (req, res, next) => {
  getDoc(doc(db, "users", req.params.id))
  .then((doc) => {res.send(doc.data())})
})

router.get("/userFromEmail/:email", async (req, res, next) => {
    const userInfo = []
    const docs = await getDocs(collection(db, "users"))
    docs.forEach((doc) => userInfo.push({id: doc.id,...doc.data()}))
    for(let x = 0; x < userInfo.length; x++) {
        if(userInfo[x].email===req.params.email) {
            res.send(userInfo[x])
        }
    }
})



module.exports = router;