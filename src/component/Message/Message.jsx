import React from 'react';
import Class from './Message.module.css';

const Messages = (props) => {
    return (
        <div className={Class.message}>
            <img src={props.src} alt="" />
            <div className={Class.messageInfo}>
                <p>{props.name}</p>
                <span><span style={{ color: '#777' }}>{props.senderName}: </span>{props.messageSlip}</span>
            </div>
        </div>
    )
}

export default Messages;