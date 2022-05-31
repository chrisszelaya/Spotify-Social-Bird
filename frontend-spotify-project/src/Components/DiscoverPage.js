import React, {useEffect,useState} from "react";
import IndivProfilePage from "./IndivProfilePage";
import Card from '@mui/material/Card';


function DiscoverPage(){
    const [allInfo, setAllInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/discoverpg/allUserInfo?myParam=10")
        .then((res) => res.json())
        .then((text) => setAllInfo(text.result))
        .catch((err) => console.log(err))
      }, [])
    
    return(
        <div>
            {/* /allUserInfo */}
            <h1>Discover Page</h1>
            {/* Tabs to the rest of the pages */}
            {/* iterate through all the users in docs to display*/}
            {/* each user is their own card -> use card media in indivProfilePage to click */}
            <Card>
            {allInfo && allInfo.map((item) => 
            item.username
            )}
                <IndivProfilePage/>
            </Card>
        </div>
    );
}export default DiscoverPage;