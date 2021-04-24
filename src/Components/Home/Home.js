import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=> response.json())
        .then(data=> setPosts(data))
    },[])
    return (
        <div>
            {
                posts.map(post=> <PostDetails post={post}></PostDetails> )
            }
        </div>
    );
};

export default Home;