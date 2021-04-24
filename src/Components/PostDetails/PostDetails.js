import React from 'react';
import { useHistory } from 'react-router';

const PostDetails = (props) => {
    const {id, title} = props.post;
    const history= useHistory();
    let handleClick=()=>{
        history.push(`/posts/${id}`)
    }
    return (
        <div style={{border:'1px solid lightgrey'}}>
            <h3>post id : {id}</h3>
            <p>title : {title}</p>
            <button onClick={()=>handleClick(id)} >show details</button>
        </div>
    );
};

export default PostDetails;