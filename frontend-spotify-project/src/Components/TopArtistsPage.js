import React from 'react'
import { AccessTokenContext } from '../Contexts/accessTokenContext';
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

function TopArtistsPage() {
    
    const { accessToken } = useContext(AccessTokenContext);
    const [topartists, setTopArtists] = useState([]);
    const [alignment, setAlignment] = useState('year');

    useEffect(() => {
     fetch("/topartists?token="+ accessToken).then(res => res.json()).then(data => setTopArtists(data.items))
    }, [])
   
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        fetch("/topartists/"+newAlignment+"?token="+ accessToken).then(res => res.json()).then(data => setTopArtists(data.items))
    };

    console.log(topartists)
    return (
        <div>
            <Typography variant="h2">
                your top artists
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
            {topartists.length > 0 && 
                topartists.map((val, key) => 
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
                                height="160"
                                alt="No Artist Photo Found"
                                image={(val.images[0] && val.images[0].url) || 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179856.jpg'}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {val.name}
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

export default TopArtistsPage;