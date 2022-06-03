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
import { ToggleButton } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from "react-router-dom";
import TopArtist from './TopArtist';

function TopArtistsPage() {
    
    const { token } = useContext(AccessTokenContext);
    const [topartists, setTopArtists] = useState([]);
    const [alignment, setAlignment] = useState('year');

    useEffect(() => {
     fetch("/topartists?token="+ token).then(res => res.json()).then(data => setTopArtists(data.items))
    }, [])
   
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        fetch("/topartists/"+newAlignment+"?token="+ token).then(res => res.json()).then(data => setTopArtists(data.items))
    };

    console.log(topartists)
    return (
        <div>
            <Typography variant="h2">
                your top artists
            </Typography>
            <br></br>
            <Tabs centered>
                    {/* <Tab href="/" label = "Home" /> */}
                    <Tab label = "Your Profile" to='/userprofile' component={Link}/>
                    <Tab label = "Discover"  to='/discoverpage' component={Link}/>
                    <Tab label = "Liked Songs" to='/savedsongs' component={Link}/>
                    <Tab label = "Top Songs" to='/topsongs' component={Link}/>
                    <Tab style={{fontWeight:'bold',textDecorationLine:'underline'}} label = "Top Artists" />
                    <Tab label = "Forum" to='/forumpage' component={Link}/>
                    {/* <Tab label = "Inbox" to='/inboxpage' component={Link}/> */}
            </Tabs>
            <br></br>
            <Box
                m={1}
                //margin
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >            
            <ToggleButtonGroup 
                color="primary"
                fullWidth
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="month">Last Month</ToggleButton>
                <ToggleButton value="year">Last 6 Months</ToggleButton>
                <ToggleButton value="alltime">All Time</ToggleButton>
            </ToggleButtonGroup>
            </Box>
            <br></br>
            <Grid container>
            {topartists.length > 0 && 
                topartists.map((val, key) => 
                    <Grid item xs={12} sm={2}>
                        <Box style = {{
                            flex: '1',
                            padding:'20',
                            margin:'.25rem',
                            border: '15px solid white'
                        }}>
                        <TopArtist name={val.name} image={(val.images[0] && val.images[0].url) || 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179856.jpg'} artistid={val.id}/>

                        </Box>
                    </Grid>
                
                )
            }
            </Grid>
        </div>
    )
}

export default TopArtistsPage;