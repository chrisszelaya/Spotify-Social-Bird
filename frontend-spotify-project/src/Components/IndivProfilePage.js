import React, {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';

function IndivProfilePage(props){
    const location = useLocation();
    const USERNAME = location.state?.id;
    const [userInfo, setUserInfo] = useState(props.userInfo)
    return(
        <div>
           Name Here
           {console.log(USERNAME)}
           {/* {userInfo.username} */}
        </div>
    );
}export default IndivProfilePage;