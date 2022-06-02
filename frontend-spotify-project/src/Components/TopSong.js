import React from 'react'
import { IconButton, Paper, TextField, Typography} from '@mui/material';
import { Box } from '@mui/system';
//import DeleteIcon from '@mui/icons-material/Delete';
//import EditIcon from '@mui/icons-material/Edit';
//import { useState } from 'react'

function TopSong(props) {
    const {trackName, artistName, coverPhoto} = props;

    return (
        <Grid item xs={3}>
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
                    image='https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179856.jpg'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {trackName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        By {artistName}
                        </Typography>
                    </CardContent>
                </Card>
                </Box>
              </Grid>
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
export default TopSong;