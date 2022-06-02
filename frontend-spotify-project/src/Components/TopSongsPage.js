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
import TopSong from './TopSong';

function TopSongsPage() {
    
    const { token } = useContext(AccessTokenContext);
    const [topsongs, setTopSongs] = useState([]);
    const [alignment, setAlignment] = useState('year');

    useEffect(() => {
     fetch("/topsongs?token="+ token).then(res => res.json()).then(data => setTopSongs(data.items))
    }, [])

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        fetch("/topsongs/"+newAlignment+"?token="+ token).then(res => res.json()).then(data => setTopSongs(data.items))
    };
   
    console.log(topsongs)
    return (
        <div>
            <Typography variant="h2">
                your top songs
            </Typography>
            <Box
                m={1}
                //margin
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >            
            <ToggleButtonGroup 
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="month">Last Month</ToggleButton>
                <ToggleButton value="year">Last 6 Months</ToggleButton>
                <ToggleButton value="alltime">All Time</ToggleButton>
            </ToggleButtonGroup>
            </Box>
            <Grid container>
            {topsongs.length > 0 && 
                topsongs.map((val, key) => 
                    <Grid item xs={12} sm={2}>
                        <Box style = {{
                            flex: '1',
                            padding:'20',
                            margin:'.25rem',
                            border: '15px solid white'
                        }}>
                        <TopSong name={val.name} artist={val.artists[0].name} image={val.album.images[0] && val.album.images[0].url} songid={val.id}/>
                        {/* <Card sx={{ maxWidth: 200}}>
                                <CardMedia
                                component="img"
                                height="140"
                                alt="Album/song cover"
                                image={val.album.images[0] && val.album.images[0].url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {val.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    By {val.artists[0].name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        */}
                        </Box>
                    </Grid>
                
                )
            }
            </Grid>
        </div>
    )
}

/*
{
                    return <p>{val.name} by {val.artists[0].name}</p>
            }

            {students.map((c) => 
            <Grid item xs={3}>
            <Box style = {studentCardStyle}>
                <Card sx={{ maxWidth: 200}}>
                    <CardMedia
                    component="img"
                    height="140"
                    alt="student image"
                    image='https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179856.jpg'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {c.FirstName} {c.LastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Grade Level: {c.GradeLevel}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Current Grade: {c.Grade}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Class: {findClass(c)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" type="submit" onClick={() => (removeStudent(c.id))}>
                        Remove Student
                      </Button>
                    </CardActions>
                </Card>
                </Box>
              </Grid>
            )}
*/

export default TopSongsPage;