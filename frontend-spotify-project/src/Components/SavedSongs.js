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
                            <Card sx={{ maxWidth: 200}}>
                                <CardMedia
                                component="img"
                                height="140"
                                alt="Album/song cover"
                                image={val.track.album.images[0] && val.track.album.images[0].url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {val.track.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    By {val.track.artists[0].name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                
                )
            }
            </Grid>
        </div>
    )
}

export default SavedSongs;