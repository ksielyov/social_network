import React from 'react';
import Class from './Post.module.css';

const Post = (props) => {
    return (
        <div className={Class.profilePost}>
            <div className={Class.postInfo}>
                <img src='https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png' />
                <p>Pavel Durov</p>
            </div>
               <p align='justify' className={Class.postText}>{props.postText}</p>
            <div className={Class.iconContainer}><a>{props.likeCount}</a><i className="fa fa-heart-o" aria-hidden="true"></i></div>
        </div>
    )
}

export default Post;