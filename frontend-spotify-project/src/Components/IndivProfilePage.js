import React, {useState, useEffect,useContext} from "react"
import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import UserProfile from "./UserProfile.js"
import { AccessTokenContext } from './AccessTokenContext';
import {Link} from "react-router-dom";


function IndivProfilePage(props){
    const {user, token} = useContext(AccessTokenContext)
    const location = useLocation();
    const USERNAME = location.state?.spotifyID;
    const [userInfo, setUserInfo] = useState(props.userInfo)

    // const { token } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])


    // https://api.spotify.com/v1/tracks/{id}
    // useEffect(() => {
    //     fetch("/tracks/"+ token)
    //     .then(res => res.json())
    //     .then(data => songs.push(data.item))
    //    }, [])

    return(
        <div>
            <h1>Spotify Social</h1>
            <Tabs centered>
                    {/* <Tab href="/" label = "Home" /> */}
                    <Tab label = "Your Profile" to='/discoverpage/indivprofilepage' state={{id: user}} component={Link}/>
                    <Tab style={{fontWeight:'bold',textDecorationLine:'underline'}} label = "Discover"/>
                    <Tab label = "Liked Songs" to='/savedsongs' component={Link}/>
                    <Tab label = "Top Songs" to='/topsongs' component={Link}/>
                    <Tab label = "Top Artists" to='/topartists' component={Link}/>
                    <Tab label = "Forum" to='/forumpage' component={Link}/>
                    <Tab label = "Inbox" to='/inboxpage' component={Link}/>
            </Tabs>
            <UserProfile id={location.state?.id} />
           {console.log(location.state)}
           {/* {userInfo.username} */}
        </div>
    );
}export default IndivProfilePage;