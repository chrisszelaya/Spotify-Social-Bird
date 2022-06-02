//ForumnPage
import React,{useEffect,useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import {Link} from "react-router-dom";
import { common } from "@material-ui/core/colors";
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";

function ForumPage(){
    const [allForums, setAllForums] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/forumpg/allForums")
        .then((res) => res.json())
        .then((text) => setAllForums(text.result))
        .catch((err) => console.log(err))
        console.log(allForums)
      }, [])
    return(
        <div>
            <h1>Spotify Social</h1>
            <Tabs centered>
                    {/* <Tab href="/" label = "Home" /> */}
                    <Tab href="./userprofile" label = "Your Profile"/>
                    <Tab href="./discoverpage" label = "Discover"/>
                    <Tab href="./likedsongs" label = "Liked Songs"/>
                    <Tab href="./topartists" label = "Top Artists"/>
                    <Tab href="./topsongs" label = "Top Songs"/>
                    <Tab style={{fontWeight:'bold',textDecorationLine:'underline'}}label = "Forum"/>
                    <Tab href="./inboxpage" label = "Inbox"/>
            </Tabs>
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
            {allForums && allForums.map((item) => 
            <Card key = {item.id}>
                <Link to ='indivforumpage' state={{id:item.id,posts:item.posts,author:item.author,topic:item.topic}} style={{textDecoration:'none',color:common.black}}>
                <h3>{item.topic}</h3>
                </Link>
            </Card>
            )}
        </div>
    );
}export default ForumPage;