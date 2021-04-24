import React from 'react';

const Comment = (props) => {
    const {id,title} =props.comment2;
    console.log(props.comment2)
    return (
        <div>
            <p>{id } : {title}</p>
        </div>
    );
};

export default Comment;