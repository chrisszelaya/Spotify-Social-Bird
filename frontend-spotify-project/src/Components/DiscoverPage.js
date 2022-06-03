//Discover Page
import React, {useEffect,useState, useContext} from "react";
// import IndivProfilePage from "./IndivProfilePage";
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ChatIcon from '@mui/icons-material/Chat';
// import {indivProfileCard} from './pagecss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from "react-router-dom";
import { Typography } from '@mui/material';
import { common } from "@mui/material/colors";
import { AccessTokenContext } from "./AccessTokenContext";
import { getThemeProps } from "@mui/system";

function DiscoverPage(){
    const {user, setUser, setAccessToken} = useContext(AccessTokenContext); 
    console.log(user); 
    const [allInfo, setAllInfo] = useState([]);

    const indivProfileCard ={
        flex: '1',
        padding:'20',
        margin:'.25rem',
        border: '15px solid white'
        // backgroundColor: "black"
    }
    useEffect(() => {
        fetch("http://localhost:9000/discoverpg/allUserInfo?myParam=10")
        .then((res) => res.json())
        .then((text) => setAllInfo(text.result))
        .catch((err) => console.log(err))
      }, [])
    
    return(
        <div>
            {/* <Link to='AdminClassPage' state={{ className: c.name, classID: c.id, teacherName: c.teacher}}>

<Button
variant='outlined'
sx={{ color: '#673AB7', borderColor: '#673AB7' }}>Grade {c.name}</Button>

</Link> */}
            {/* /allUserInfo */}
            <Typography variant="h2">
                discover
            </Typography>
            <br></br>
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
            <br></br>
            <h2>Discover</h2>
            {/* Tabs to the rest of the pages */}
            {/* iterate through all the users in docs to display*/}
            {/* each user is their own card -> use card media in indivProfilePage to click */}
            {/* <Grid container spacing ={3}> */}
            {allInfo && allInfo.map((item) => 
            // id = {item.id} id:item.id,...item.data
            <Card key = {item.id} style = {indivProfileCard}>
                {console.log(item)}
                <Link to ='indivprofilepage' state={{id:item.id,spotifyID:item.spotifyID, username:item.username}} style={{textDecoration:'none',color:common.black}}>
                {/* <CardActionArea component={Link} to={{pathname:'indivprofilepage', state:{id: item.id }}}> */}
                <h2>Username: {item.username}</h2>
                {/* <IndivProfilePage/> */}
                <Grid container spacing ={2}>
                    <Grid item xs>
                        <CardMedia
                            style={{
                                width: "auto",
                                maxHeight: "100px"
                            }}
                            component="img"
                            alt="profile image"
                            image='https://png.pngitem.com/pimgs/s/168-1689599_male-user-filled-icon-user-icon-100-x.png'
                            />
                    </Grid>
                    <Grid item xs>
                        
                        <h4>SpotifyId: {item.spotifyID}</h4>
                        <h4>Top Artist: </h4>
                        <h4>Top Song: </h4>
                    </Grid>
                </Grid>
                {/* </CardActionArea> */}
                </Link>
                <CardActions>
                    <Button size="small" color="secondary" endIcon={<ChatIcon />}>
                        Chat
                    </Button>
                </CardActions>
            </Card>
            
            )}
             {/* </Grid> */}
        </div>
    );
}export default DiscoverPage;
