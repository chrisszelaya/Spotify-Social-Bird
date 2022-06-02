import React, { useEffect, useState, useContext } from 'react';
import {FormControl, Select, InputLabel, MenuItem, Button} from "@mui/material";
import axios from "axios"
import {AccessTokenContext} from "./AccessTokenContext"

function UserProfile() {
    //state
    const [userInfo, setUserInfo] = useState(); 
    const { token } = useContext(AccessTokenContext);
    console.log(token)

    const getUserInfo = (userID) => {
        fetch("http://localhost:9000/discoverpg/allUserInfo/" + userID)
        .then((res) => res.json())
        .then((text) => {setUserInfo(text)})
    }

    const getSpotifyInfo = (userID) => {
        fetch("http://localhost:9000/spotify/user/")
        .then((res) => res.json())
        .then((data) => window.open(data.url))
    }
    
    useEffect(() => {
        getUserInfo("j48981HNmaNpshoSnIZz");
        
      }, [])

    if(userInfo) {
    const curUserID = "j48981HNmaNpshoSnIZz"; 
    const pageID = "j48981HNmaNpshoSnIZz";
    const username = userInfo.username; 
    const privatePage = userInfo.private; 
    const myPage = (curUserID == pageID) ? true : false
    const allTopArtistsIDs = ["0c173mlxpT3dSFRgMO8XPh", "6l3HvQ5sa6mXTsMTB19rO5", "6AgTAQt8XS6jRWi4sX7w49", "757aE44tKEUQEqRuT6GnEB", "4DdkRBBYG6Yk9Ka8tdJ9BW"];
    const allTopSongsIDs = ["7zvfDihYiJ8RQ1nRcpKBF5", "6EDO9iiTtwNv6waLwa1UUq", "4QqTDl0Po7cbaZMcGsZmBg", "1yxgsra98r3qAtxqiGZPiX", "3iVcZ5G6tvkXZkZKlMpIUs"]; 
    const displayedTopArtistsIDs = userInfo.displayedArtistIDs; 
    const displayedTopSongsIDs = userInfo.displayedSongIDs; 

    const addSongToDisplayed = (song) => {
        axios.put("http://localhost:9000/discoverpg/addSong/" + pageID + "/" + song)
        .then((res) => {getUserInfo(pageID); })
    }

    const addArtistToDisplayed = (artist) => {
        axios.put("http://localhost:9000/discoverpg/addArtist/" + pageID + "/" + artist)
        .then((res) => {getUserInfo(pageID); })
    }

    const removeSongFromDisplayed = (song) => {
        axios.put("http://localhost:9000/discoverpg/removeSong/" + pageID + "/" + song)
        .then((res) => {getUserInfo(pageID); })
    }

    const removeArtistFromDisplayed = (artist) => {
        axios.put("http://localhost:9000/discoverpg/removeArtist/" + pageID + "/" + artist)
        .then((res) => {getUserInfo(pageID); })
    }

    if(myPage) {
        console.log(userInfo)
        let topSongsNotInDisplayed = []; 
        for(let x = 0; x < allTopSongsIDs.length; x++) {
            if(!displayedTopSongsIDs.includes(allTopSongsIDs[x])) {
                topSongsNotInDisplayed.push(allTopSongsIDs[x]); 
            }
        }
        let topArtistsNotInDisplayed = []; 
        console.log(userInfo.displayedArtistIDs)
        for(let x = 0; x < allTopArtistsIDs.length; x++) {
            if(!displayedTopArtistsIDs.includes(allTopArtistsIDs[x])) {
                topArtistsNotInDisplayed.push(allTopArtistsIDs[x]); 
            }
        }
        return(
            <div style={{alignItems: "center", textAlign: "center"}}>
                <h1 style={{textAlign: "left", margin: 25, marginLeft: 60, fontSize: 46}}>{username}'s Profile (yours)</h1>
                <header style={{margin: 15, borderWidth: 2, borderStyle: "dashed"}}>
                <h2>Displayed Songs</h2>
                <SongCard id={displayedTopSongsIDs[0]} removeSong={removeSongFromDisplayed} feature={true}/>
                {displayedTopSongsIDs.slice(1, displayedTopSongsIDs.length).map((id) => <SongCard id={id} removeSong={removeSongFromDisplayed} feature={false}/>)}
                <h4 style={{textAlign: "left"}}>Add a new song to display: </h4>
                <AddNewSong topSongsNotInDisplayed={topSongsNotInDisplayed} addSongToDisplayed={addSongToDisplayed}/>
                </header>
                <header style={{margin: 15, borderWidth: 2, borderStyle: "dashed"}}>
                <h2>Displayed Artists</h2>
                {displayedTopArtistsIDs.map((id) => <ArtistCard key={id} id={id} token={token} removeArtist={removeArtistFromDisplayed}/>)}
                <h4 style={{textAlign: "left"}}>Add a new artist to display: </h4>
                <AddNewArtist token={token} topArtistsNotInDisplayed={topArtistsNotInDisplayed} addArtistToDisplayed={addArtistToDisplayed}/>
                </header>
                <button onClick={() => getSpotifyInfo("j48981HNmaNpshoSnIZz")}>login</button>
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
            <div style={{alignItems: "center", textAlign: "center"}}>
                <h1 style={{textAlign: "center", margin: 25, marginLeft: 60, fontSize: 46}}>{username}'s Profile</h1>
                <header style={{margin: 15, borderWidth: 2, borderStyle: "dashed"}}>
                <h2>Displayed Songs</h2>
                <iframe style={{borderRadius: 12, margin: 8}} src={"https://open.spotify.com/embed/track/" + displayedTopSongsIDs[0] + "?utm_source=generator"} width="95%" height="380" frameBorder="0" allowFullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                {displayedTopSongsIDs.slice(1, displayedTopSongsIDs.length).map((id) => <iframe style={{borderRadius: 12, margin: 8}} src={"https://open.spotify.com/embed/track/" + id + "?utm_source=generator"} width="95%" height="80" frameBorder="0" allowFullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>)}
                </header>
                <header style={{margin: 15, borderWidth: 2, borderStyle: "dashed"}}>
                <h2>Displayed Artists</h2>
                {displayedTopArtistsIDs.map((id) => <ArtistCard key={id} id={id} token={token}/>)}
                </header>
                <button onClick={() => getSpotifyInfo("j48981HNmaNpshoSnIZz")}>login</button>
            </div>
        );
    }
    }
}

class SongCard extends React.Component {
    render() {
        if(this.props.feature) {
            return(
                <div style={{ alignItems: "center", margin: 15, borderStyle: "dotted", borderWidth: 1}}>
                    <iframe key={this.props.id} style={{borderRadius: 12, margin: 8}} src={"https://open.spotify.com/embed/track/" + this.props.id + "?utm_source=generator"} width="95%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <Button style={{margin: 15}} variant="outlined" onClick={() => {this.props.removeSong(this.props.id)}}>Remove from Displayed Songs</Button>
                </div>
            );
        }
        else {
            return(
                <div style={{ alignItems: "center", margin: 15, borderStyle: "dotted", borderWidth: 1}}>
                    <iframe key={this.props.id} style={{borderRadius: 12, margin: 8}} src={"https://open.spotify.com/embed/track/" + this.props.id + "?utm_source=generator"} width="95%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <Button style={{margin: 15}} variant="outlined" onClick={() => {this.props.removeSong(this.props.id)}}>Remove from Displayed Songs</Button>
                </div>
            );
        }
    }
}

class ArtistCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artistData: null,
        }
    }
    render() {
        if(this.state.artistData) {
            console.log(this.state.artistData)
        return(
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: 15, }}>
            <img src={this.state.artistData.images[0].url} width="150" height="auto"/>
            <header style={{margin: 20}}>
                    <h3>{this.state.artistData.name}</h3>
                    <h4>Genres: {this.state.artistData.genres[0]}, {this.state.artistData.genres[1]}, {this.state.artistData.genres[2]}</h4>
                    <h4>Followers: {this.state.artistData.followers.total}</h4>
            </header>
            <Button style={{margin: 15}} variant="outlined" color="error" onClick={() => {this.props.removeArtist(this.props.id)}}>Remove</Button>
            </div>
        );
        }
        else{
            if(this.props.token) {
                console.log("token acquired!")
                fetch("http://localhost:9000/spotify/getArtist?artistID=" + this.props.id + "&token=" + this.props.token)
                .then((res) => res.json()).then((data) => this.setState({
                    artistData: data
                }))
            }
        }
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

class AddNewArtist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curArtistToDisplay: "",
            artistArray: [],
            runningCounter: 0,
        }
    }
    render() {
        if(this.state.runningCounter >= this.props.topArtistsNotInDisplayed.length) {
            console.log(this.state.artistArray)
            let nonStateArtistArray = []; 
            for(let x =0; x < this.state.artistArray.length; x++) {
                if((this.state.artistArray[x].id && this.state.artistArray[x].name))
                nonStateArtistArray.push(this.state.artistArray[x]);
            }
        return(
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                    <InputLabel id="artist-to-display-label">Choose Artist to Display</InputLabel>
                    <Select
                        labelId="artist-to-display-label"
                        id="artist-to-display"
                        value={this.state.curArtistToDisplay}
                        label="Choose Artist to Display"
                        onChange={(e) => this.setState({
                            curArtistToDisplay: e.target.value,
                        })}>
                        {nonStateArtistArray.map((artist) => <MenuItem value={artist.id}>{artist.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button style={{margin: 10}} variant="outlined" onClick={() => {
                    this.props.addArtistToDisplayed(this.state.curArtistToDisplay); 
                    this.setState({
                        curArtistToDisplay: "",
                        artistArray: [],
                        runningCounter: 0,
                    })
                }}>Add</Button>
            </div>
        );
        }
        else {
        console.log(this.state.runningCounter)
        if(this.props.token && this.state.runningCounter < this.props.topArtistsNotInDisplayed.length && this.state.runningCounter==this.state.artistArray.length) {
            console.log(this.props.topArtistsNotInDisplayed.length)
            const x = this.state.runningCounter;
            fetch("http://localhost:9000/spotify/getArtist?artistID=" + this.props.topArtistsNotInDisplayed[x] + "&token=" + this.props.token)
            .then((res) => res.json()).then((data) => {
                let newVar = {
                    id: this.props.topArtistsNotInDisplayed[x], 
                    name: data.name
                }
                let newArray = this.state.artistArray; 
                newArray[x] = newVar; 
                this.setState({
                    runningCounter: x+1,
                    artistArray: newArray
                })
                console.log("pushed a new artist to new array!")
            })
        }
        else{
            console.log(this.state.artistArray)
        }
    }
    }
}

export default UserProfile;