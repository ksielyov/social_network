import React from 'react';
import Class from './DialogMessage.module.css';
import { NavLink } from 'react-router-dom';

const DialogMessage = (props) => {
    return (
        <div className={Class.message}>
            <img src={props.src} alt="" />
            <div className={Class.messageInfo}>
                <p>{props.name}</p>
                <span>{props.message}</span>
            </div>
        </div>
    )
}

export default DialogMessage;