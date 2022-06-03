import UserProfile from "./UserProfile"
import { AccessTokenContext } from "./AccessTokenContext";
import {useContext} from "react"

const IndivUserProfile = () => {
    const {user} = useContext(AccessTokenContext); 
    return(

        <UserProfile id={user}/>
    ); 
}

export default IndivUserProfile