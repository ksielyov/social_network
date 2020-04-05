import React from 'react';
import Class from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={Class.friendItem}>
            <img src={props.src} />
            <p>{props.name}</p>
        </div>
    )
}

export default FriendItem;