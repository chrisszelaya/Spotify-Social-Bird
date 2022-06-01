import { Button, Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TopSongsList from './TopSongsList';

function TopSongsPage(props){
    const {user, logout} = props;
    const [displayedSongs, setDisplayedSongs] = useState([]);


    useEffect( () => {
        async function fetchSongs(){
          const response = await fetch('/topsongspage/topsongslist');
          const body = await response.json();
          if (response.status !== 200) {
            throw Error(body.message) 
          }
          setDisplayedSongs(body);
          //console.log(body);
        }
        fetchSongs();
    } ,[])


    return(
        <div>
            <Typography variant='h1'>Top Songs</Typography>
            <TopSongsList user={user} topsongs={displayedSongs}/>

            <Box sx={{width:'15vh'}}/>
            <Typography variant='h6'>Currently logged in as {user}</Typography>
            <Button onClick={logout} variant='contained'>Log Out</Button>
       </div>

    );



}export default TopSongsPage;