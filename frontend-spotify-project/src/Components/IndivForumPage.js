// IndivForumPage.js

import React, {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function IndivForumnPage(props){
    const location = useLocation();
    const forumnID = location.state?.id;
    const author = location.state?.author;
    const [posts,setPosts] = useState(location.state?.posts);
    const [authorName,setAuthorName] = useState('')
    const [allUsers, setAllUsers] = useState([]);
    const [tempPost,setTempPost] = useState("");
    const[tempUsername,setTempUsername] = useState();
    
    // const [users,setUsers]
    useEffect(() => {
        fetch("http://localhost:9000/discoverpg/allUserInfo?myParam=10")
        .then((res) => res.json())
        .then((text) => setAllUsers(text.result))
        .catch((err) => console.log(err))
        
        // allUsers.forEach((s) =>{
        //     if(s.id === author)
        //     setAuthorName("hi")
        // })
        fetch("http://localhost:9000/forumpg/allPosts")
        .then((res) => res.json())
        .then((text) => setPosts(text.result))
        .catch((err) => console.log(err))
        console.log(posts)
      },[])

    const post = (id) =>{
        console.log(id)
        axios.put('http://localhost:9000/forumpg/post',{
            post:tempPost,
            username:tempUsername,
            forumId:id
        })
    }
    // const getUser = (id) =>{
    //     allUsers.forEach((u) =>{
    //     if(u.id === id){
    //         setAuthorName(u.username);
    //         }
    //     }
    //     )
    // }
    return(
        <div>
            <h1>Spotify Social</h1>
           {/* <Tabs centered>
                    <Tab href="/" label = "Home" /> 
                    <Tab href="./userprofile" label = "Your Profile"/>
                    <Tab href='./discoverpage' label = "Discover"/>
                    <Tab href="./likedsongs" label = "Liked Songs"/>
                    <Tab href="./topartists" label = "Top Artists"/>
                    <Tab href="./topsongs" label = "Top Songs"/>
                    <Tab href="./" label = "Forumn"/>
                    <Tab href="./inboxpage" label = "Inbox"/>
            </Tabs> 
           */}
           <h2>Forumn Page</h2>

            <TextField label="Username" variant="filled" onChange={(e) => setTempUsername(e.target.value)}/>
            <TextField label="Your Post" variant="filled" onChange={(e) => setTempPost(e.target.value)} />
            <Button variant="outlined" size ='large' onClick={() => post(forumnID)}>Post</Button>

            <h3>{author}</h3>
            
            {posts.map((p) =>
           <div key ={p.post}>
               <h4>{p.post}</h4>
           </div>
           )}
        </div>
    );
}export default IndivForumnPage;