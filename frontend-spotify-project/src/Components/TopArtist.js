import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios';
import { AccessTokenContext } from './AccessTokenContext';
import { useContext } from 'react';
//import DeleteIcon from '@mui/icons-material/Delete';
//import EditIcon from '@mui/icons-material/Edit';
//import { useState } from 'react'

function TopArtist(props) {

    const { name, image, artistid} = props
    const { user } = useContext(AccessTokenContext);
    //const pageID = "j48981HNmaNpshoSnIZz";


    const addTopArtistToDisplay = (song) => {
        axios.put("http://localhost:9000/discoverpg/addArtist/" + user + "/" + artistid) 
        .then((res) => {alert('Added!'); })
    }
    

  return (
    <Card sx={{ maxWidth: 200}}>
        <CardMedia
        component="img"
        height="140"
        alt="Album/song cover"
        image={image}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
        </CardContent>
        <CardActions>
                      <Button size="small" color="primary" type="submit" onClick={() => (addTopArtistToDisplay(name, image))}>
                        Add To Displayed Artists
                      </Button>
        </CardActions>
    </Card>
  )
}

/*
        <Paper>
            <Box display='flex' alignItems='center' justifyContent='center'>
            <div>
                <Typography variant='h5'> {trackName} by {artistName}</Typography>
                <Typography variant='h4'>{coverPhoto}</Typography>
            </div>
            </Box>          
        </Paper>
*/
export default TopArtist;