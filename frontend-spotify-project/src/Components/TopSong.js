import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios';

function TopSong(props) {

    const { name, artist, image, songid } = props
    const pageID = "j48981HNmaNpshoSnIZz";


    const addTopSongToDisplay = (song) => {
        axios.put("http://localhost:9000/discoverpg/addSong/" + pageID + "/" + songid) 
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
            <Typography variant="body2" color="text.secondary">
            By {artist}
            </Typography>
        </CardContent>
        <CardActions>
                      <Button size="small" color="primary" type="submit" onClick={() => (addTopSongToDisplay(name, artist, image))}>
                        Add To Displayed Songs
                      </Button>
        </CardActions>
    </Card>
  )
}

export default TopSong
