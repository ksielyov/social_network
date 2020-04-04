import React from 'react';
import Class from './ChatInfo.module.css';

const ChatInfo = (props) => {
    return (
        <div className={Class.chatInfo}>
            <div className={Class.leftContainer}>
                <h1>{props.senderName}</h1>
                <p>{props.status}</p>
            </div>

            <div className={Class.rightContainer}>
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                <img src={props.ava} alt="" />
            </div>
        </div>
    )
}

export default ChatInfo;