import React from 'react'
import TopSong from './TopSong';

function TopSongsList(props) {
    const {topsongs} = props;
    //const {user} = props;

    return (
        <div>
        {topsongs && topsongs.map((sng) => 
            <TopSong key={sng.doc_id} sng={sng}/>)}
        </div>
    )
}

export default TopSongsList