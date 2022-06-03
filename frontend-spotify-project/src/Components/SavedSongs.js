import React from 'react'
import { AccessTokenContext } from './AccessTokenContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from "react-router-dom";
import SavedSong from './SavedSong';

function SavedSongs() {
    
    const { token } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])


    useEffect(() => {
     fetch("/savedsongs?token="+ token).then(res => res.json()).then(data => setSongs(data.items))
    }, [])
   
    console.log(token)
    console.log(songs)
    return (
        <div>
            <Typography variant="h2">
                your liked songs
            </Typography>
            <br></br>
            <Tabs centered>
                    {/* <Tab href="/" label = "Home" /> */}
                    <Tab label = "Your Profile" to='/userprofile' component={Link}/>
                    <Tab label = "Discover"  to='/discoverpage' component={Link}/>
                    <Tab style={{fontWeight:'bold',textDecorationLine:'underline'}} label = "Liked Songs"/>
                    <Tab label = "Top Songs" to='/topsongs' component={Link}/>
                    <Tab label = "Top Artists" to='/topartists' component={Link}/>
                    <Tab label = "Forum" to='/forumpage' component={Link}/>
                    <Tab label = "Inbox" to='/inboxpage' component={Link}/>
            </Tabs>
            <br></br>
            <Grid container>
            {songs.length > 0 && 
                songs.map((val, key) => 
                    <Grid item xs={12} sm={2}>
                        <Box style = {{
                            flex: '1',
                            padding:'20',
                            margin:'.25rem',
                            border: '15px solid white'
                        }}>
                        <SavedSong name={val.track.name} artist={val.track.artists[0].name} image={val.track.album.images[0] && val.track.album.images[0].url} songid={val.track.id}/>
                        </Box>
                    </Grid>
                
                )
            }
            </Grid>
        </div>
    )
}

export default SavedSongs;