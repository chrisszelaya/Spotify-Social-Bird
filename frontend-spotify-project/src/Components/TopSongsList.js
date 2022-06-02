import React from 'react'
import TopSong from './TopSong';

function TopSongsList(props) {
    const {topsongs} = props;
    //const {user} = props;

    return (
        <div>
//          displayedSongs && displayedSongs.map((sng) => 
//             <TopSong key={sng.doc_id} sng={sng}/>)} 
        {topsongs && topsongs.map((sng) => 
            <TopSong key={sng.doc_id} sng={sng}/>)}
        </div>
    )
}

export default TopSongsList