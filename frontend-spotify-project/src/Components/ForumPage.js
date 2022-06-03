
import React,{useEffect,useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import {Link} from "react-router-dom";
import { common } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { Typography } from "@mui/material";

function ForumPage(){
    const [allForums, setAllForums] = useState([]);
    const[tempTopic,setTempTopic] =useState("");
    // const [allPosts,setPosts] = useState([]);
    // const [forumID, setForumID] = useState();
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
    useEffect(() => {
        fetch("http://localhost:9000/forumpg/allForums")
        .then((res) => res.json())
        .then((text) => setAllForums(text.result))
        .catch((err) => console.log(err))
        // console.log(allForums)
        // async function fetchPosts(forumID){
        //     const response = await fetch ("http://localhost:9000/forumpg/allPosts/" + forumID);
        //     const body = await response.json();
        //     if(response.status !== 200){
        //         throw Error(body.result)
        //     }
        //     setPosts(body.result);
        // }
        // fetchPosts();
      }, [])
    //   const getUser = (author)=>{
    //     allUsers.forEach((u) =>{   
    //         if(u.id === author.split(" ").join("")){
    //             // console.log(u.username)
    //             setAuthorName(u.username);
    //             return u.username;
    //         }
    //     })
    //   }
    const createNewForum = (topic) =>{
        axios.post("http://localhost:9000/forumpg/newForum", {
        topic: tempTopic,
        username: "user1"
        })
        .then((res) => console.log("post",res.data))
        .catch((err) => console.log(err))
    }
    return(
        <div>
            <Typography variant="h2">
                forum
            </Typography>
            <br></br>
            <Tabs centered>
                    {/* <Tab href="/" label = "Home" /> */}
                    <Tab label = "Your Profile" to='/userprofile' component={Link}/>
                    <Tab label = "Discover" to='/discoverpage' component={Link}/>
                    <Tab label = "Liked Songs" to='/savedsongs' component={Link}/>
                    <Tab label = "Top Songs" to='/topsongs' component={Link}/>
                    <Tab label = "Top Artists" to='/topartists' component={Link}/>
                    <Tab style={{fontWeight:'bold',textDecorationLine:'underline'}}label = "Forum"/>
                    
            </Tabs>
            <br></br>
            <Divider></Divider>
            {/* <Box display="flex" flexDirection="row">
                <Box flexGrow={0}>
                    <AppBar elevation={0} position="sticky">
                    {allInfo && allInfo.map((item) => 
                    <div>
                            <Tab href="./" label = {item.topic}/>
                            <Divider/>
                     </div>
                     )} 
                    </AppBar>
                </Box>
                <h1>Forums</h1>
            </Box> */}
            <h2>Forumns</h2>
            <p>Browse forumns:</p>
            {allForums && allForums.map((item) => 
            <Card style ={postBox}key = {item.id}>
                <Link to ='indivforumpage'state={{id:item.id,posts:item.posts,author:item.author,topic:item.topic}} style={{textDecoration:'none',color:common.black}}>
                <h3>{item.topic}</h3>
                </Link>
            </Card>
            )}
            <Divider></Divider>
            <p>Create a new forum:</p>
            <Card >
                <TextField multiline label="Topic" onChange={(e) => setTempTopic(e.target.value)} ></TextField>
                <Button onClick={()=> createNewForum(tempTopic)}>Create New Discussion</Button>
            </Card>
        </div>
    );
}export default ForumPage;