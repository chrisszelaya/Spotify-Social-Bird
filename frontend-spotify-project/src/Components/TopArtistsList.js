import React from 'react'

function TopArtistsList(props) {
    const {topartists} = props;
    const {user} = props;

    return (
        <div>
        {displayedArtists && displayedArtists.map((sng) => 
            <TopSong key={sng.doc_id} sng={sng}/>)}
        </div>
    )
}

export default TopArtistsList;