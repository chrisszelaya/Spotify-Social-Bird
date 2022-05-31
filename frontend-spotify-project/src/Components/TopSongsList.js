import React from 'react'

function TopSongsList(props) {
    const {topsongs} = props;
    //const {user} = props;

    return (
        <div>
        {displayedSongs && displayedSongs.map((sng) => 
            <TopSong key={sng.doc_id} sng={sng}/>)}
        </div>
    )
}

export default TopSongsList