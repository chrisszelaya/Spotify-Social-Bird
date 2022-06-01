import React from 'react'
import TopArtist from './TopArtist';


function TopArtistsList(props) {
    const {topartists} = props;
    //const {user} = props;

    return (
        <div>
        {topartists && topartists.map((sng) => 
            <TopArtist key={sng.doc_id} sng={sng}/>)}
        </div>
    )
}

export default TopArtistsList