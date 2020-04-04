import React from 'react';
import Class from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Messages = (props) => {
    return (
        <NavLink exact activeClassName={Class.activeUser} to={"/messages/" + props.id} className={Class.message}>
            <img src={props.src} alt="" />
            <div className={Class.messageInfo}>
                <p>{props.name}</p>
                <span><span style={{ color: '#777' }}>{props.senderName}: </span>{props.messageSlip}</span>
            </div>
        </NavLink>
    )
}

export default Messages;