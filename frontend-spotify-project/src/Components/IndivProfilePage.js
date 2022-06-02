import React, {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function IndivProfilePage(props){
    const location = useLocation();
    const USERNAME = location.state?.spotifyID;
    const [userInfo, setUserInfo] = useState(props.userInfo)
    return(
        <div>
            <h1>Spotify Social</h1>
            <Tabs centered>
                    {/* <Tab href="/" label = "Home" /> */}
                    <Tab href="./userprofile" label = "Your Profile"/>
                    <Tab href='./' label = "Discover"/>
                    <Tab href="./likedsongs" label = "Liked Songs"/>
                    <Tab href="./topartists" label = "Top Artists"/>
                    <Tab href="./topsongs" label = "Top Songs"/>
                    <Tab href="./forumnpage" label = "Forumn"/>
                    <Tab href="./inboxpage" label = "Inbox"/>
            </Tabs>
           {USERNAME}'s Profile
           {console.log(location.state)}
           {/* {userInfo.username} */}
        </div>
    );
}export default IndivProfilePage;