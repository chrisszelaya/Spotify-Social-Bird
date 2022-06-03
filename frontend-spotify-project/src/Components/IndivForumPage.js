// IndivForumPage.js

import React, {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
import Posts from './Posts';
import Divider from "@mui/material/Divider";
// import Grid from '@mui/material/Grid';

function IndivForumnPage(props){
    const location = useLocation();
    const forumID = location.state?.id;
    const author = location.state?.author;
    const topic = location.state?.topic;
    const [posts,setPosts] = useState(location.state?.posts);
    // const {posts,setPosts} = location.state?.posts;
    const [tempPost,setTempPost] = useState("");
    const[tempUsername,setTempUsername] = useState();
    const [authorName,setAuthorName] = useState(author);
    // const [allUsers, setAllUsers] = useState([]);
    // const getUsername = (id) =>{
    //     allUsers.forEach((u) =>{    
    //     if(u.id === author.split(" ").join("")){
    //         setAuthorName(u.username);
    //         }
    //     })
    //     // console.log(authorName);
    // }

    const buttonStyle={
        border:"none",
        borderRadius: "0.25rem",
        fontWeight: "bold",
        display: "inline-block",
        textDecoration: "none"    
    }

    const postBox ={
        // maxWidth: "37.5rem",
        // color: "#fff",
        // backgroundColor: "#909090",
        // borderRadius: "0.875rem",
        // padding: "0.2rem 1rem 2rem"
        flex: '1',
        padding:'20',
        margin:'.25rem',
        border: '15px solid white',
      }
    // const [users,setUsers]
    useEffect(() => {
        console.log("rerendering...");
        fetch("http://localhost:9000/discoverpg/allUserInfo?myParam=10")
        .then((res) => res.json())
        .then((text) => {
             text.result.forEach((u) =>{   
                if(u.id === author.split(" ").join("")){
                    setAuthorName(u.username);
                    // console.log(u.username);
                }
            })
        })
        .catch((err) => console.log(err))
        // async function fetchPosts(){
        //     const response = await fetch ("http://localhost:9000/forumpg/allPosts/" + forumID);
        //     const body = await response.json();
        //     if(response.status !== 200){
        //         throw Error(body.result)
        //     }
        //     setPosts(body.result);
        // }
        // fetchPosts();
        fetch("http://localhost:9000/forumpg/allPosts/" + forumID)
        .then((res) => res.json())
        .then((text) => setPosts(text.result))
        .catch((err) => console.log(err))
      },[forumID,author])

    const post = (id) =>{
        // console.log(id)
        axios.put('http://localhost:9000/forumpg/post',{
            post:tempPost,
            username:tempUsername,
            forumId:id
        })
    }
    return(
        <div>
            <h1>Spotify Social</h1>
           <Tabs centered>
                    <Tab href="/" label = "Home" /> 
                    <Tab href="/userprofile" label = "Your Profile"/>
                    <Tab href='/discoverpage' label = "Discover"/>
                    <Tab href="/likedsongs" label = "Liked Songs"/>
                    <Tab href="/topartists" label = "Top Artists"/>
                    <Tab href="/topsongs" label = "Top Songs"/>
                    <Tab href="./" label = "Forumn"/>
                    {/* <Tab href="/inboxpage" label = "Inbox"/> */}
            </Tabs> 
          
           <h2>{topic} </h2>
           <h3>Author: {authorName}</h3>
            <Divider></Divider>
            {/* {console.log(posts)} */}
            {posts && posts.map((p) =>
           <div key ={p.post}>
                <Card style ={postBox} variant="outlined">
                    <Posts post = {p} ></Posts>
                </Card>
           </div>
           )}
            <Card style = {postBox}>
                <TextField multiline label="Your Post" variant="filled" onChange={(e) => setTempPost(e.target.value)} />
                <TextField label="Username" variant="filled" onChange={(e) => setTempUsername(e.target.value)}/>
                <Button style={buttonStyle}variant="outlined" size ='large' onClick={() => post(forumID)}>Post</Button>
            </Card>
        </div>
       
    );
}export default IndivForumnPage;