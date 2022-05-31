import React, { useEffect, useState } from 'react';
import {FormControl, Select, InputLabel, MenuItem, Button} from "@mui/material";

function UserProfile() {
    //state
    const [displayedTopSongsIDs, setDisplayedTopSongsIDs] = useState(["7zvfDihYiJ8RQ1nRcpKBF5", "6EDO9iiTtwNv6waLwa1UUq"]); 

    //most of this will come from the api
    const username = "alek"; 
    const privatePage = false; 
    const myPage = true; 
    const allTopArtistsIDs = [];
    const allTopSongsIDs = ["7zvfDihYiJ8RQ1nRcpKBF5", "6EDO9iiTtwNv6waLwa1UUq", "4QqTDl0Po7cbaZMcGsZmBg"]; 
    const displayedTopArtistsIDs = ["0c173mlxpT3dSFRgMO8XPh"]; 


    const addSongToDisplayed = (song) => {
        console.log(song);
        //CHANGE THIS TO CHANGE DATABASE
        let newArray = displayedTopSongsIDs; 
        newArray.push(song); 
        setDisplayedTopSongsIDs(newArray);  
        console.log(displayedTopSongsIDs)
    }

    let topSongsNotInDisplayed = []; 
    for(let x = 0; x < allTopSongsIDs.length; x++) {
        if(!displayedTopSongsIDs.includes(allTopSongsIDs[x])) {
            topSongsNotInDisplayed.push(allTopSongsIDs[x]); 
        }
    }

    if(myPage) {
        return(
            <div>
                <h1 style={{textAlign: "left", margin: 25, marginLeft: 60, fontSize: 46}}>{username}'s Profile (yours)</h1>
                <h2>Displayed Songs</h2>
                {displayedTopSongsIDs.map((id) => <iframe key={id} style={{borderRadius: 12, margin: 8}} src={"https://open.spotify.com/embed/track/" + id + "?utm_source=generator"} width="95%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>)}
                <h4>Add a new song to display: </h4>
                <AddNewSong topSongsNotInDisplayed={topSongsNotInDisplayed} addSongToDisplayed={addSongToDisplayed}/>
                <h2>Displayed Artists</h2>
                {displayedTopArtistsIDs.map((id) => <ArtistCard id={id}/>)}
            </div>
        );
    }
    if(privatePage) {
        return(
            <div>
                <h1 style={{textAlign: "left", margin: 25, marginLeft: 60, fontSize: 46}}>{username}'s Profile</h1>
                <h5>This profile is private!</h5>
            </div>
        ); 
    }
    else {
        return(
            <div>
                <h1 style={{textAlign: "left", margin: 25, marginLeft: 60, fontSize: 46}}>{username}'s Profile</h1>
                <h2>Displayed Songs</h2>
                {displayedTopSongsIDs.map((id) => <iframe style={{borderRadius: 12, margin: 8}} src={"https://open.spotify.com/embed/track/" + id + "?utm_source=generator"} width="95%" height="80" frameBorder="0" allowFullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>)}
                <h2>Displayed Artists</h2>
                {displayedTopArtistsIDs.map((id) => <ArtistCard id={id}/>)}
            </div>
        );
    }
}

class ArtistCard extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.id}</p>
            </div>
        );
    }
}

class AddNewSong extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curSongToDisplay: "",

        }
    }
    render() {
        return(
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                    <InputLabel id="song-to-display-label">Choose Song to Display</InputLabel>
                    <Select
                        labelId="song-to-display-label"
                        id="song-to-display"
                        value={this.state.curSongToDisplay}
                        label="Choose Song to Display"
                        onChange={(e) => this.setState({
                            curSongToDisplay: e.target.value,
                        })}>
                        {this.props.topSongsNotInDisplayed.map((song) => <MenuItem value={song}>{song}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button style={{margin: 10}} variant="outlined" onClick={() => {this.props.addSongToDisplayed(this.state.curSongToDisplay)}}>Add</Button>
            </div>
        );
    }
}

export default UserProfile;