function TopArtistsPage(){
    const [displayedArtists, setDisplayedArtists] = useState([]);


    useEffect( () => {
        async function fetchArtists(){
          const response = await fetch('/topartistspage/topartistslist');
          const body = await response.json();
          if (response.status !== 200) {
            throw Error(body.message) 
          }
          setDisplayedArtists(body);
          //console.log(body);
        }
        fetchArtists();
    } ,[])


    return(
        <div>
            <Typography variant='h1'>Top Artists</Typography>
            <TopArtistsList user={user} topartists={displayedArtists}/>

            <Box sx={{width:'15vh'}}/>
            <Typography variant='h6'>Currently logged in as {user}</Typography>
            <Button onClick={logout} variant='contained'>Log Out</Button>
            
            {/*
            */}
        </div>
    );



}export default TopArtistsPage;