import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const ButtonDetails = () => {
    const {id} =  useParams();
    const [posts,setPosts]= useState({});
    const [comments,setComments] = useState([]);
    console.log(comments);
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(response=> response.json())
        .then(data=> setPosts(data))

    },[id])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts?userId=${id}`
        fetch(url)
        .then(response=> response.json())
        .then(data=> setComments(data))
    },[id])
    return (
        <div>
            <h2>id : {posts.id}</h2>
            <h3>body : {posts.body}</h3>
            <h2>comments length {comments.length}</h2>
            {
                comments.map(comment1=> <Comment comment2={comment1}></Comment>)
            }
        </div>
    );
};

export default ButtonDetails;