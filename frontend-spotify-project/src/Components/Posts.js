import React from "react";

function Posts(props){
    const postData = props.post;
    const post = postData.post;
    const user = postData.user;
    const likes = postData.likes;

    return(
        <div>
             <h4>{post}</h4>
                    Posted by: {user}
                    <br></br>
                    Likes:{likes} <button>Like this message</button>
        </div>
    )
}export default Posts;