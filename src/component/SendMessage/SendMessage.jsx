import React from 'react';
import Class from './SendMessage.module.css';

const SendMessage = (props) => {
    return (
        <div className={Class.sendMessage}>
            <textarea placeholder='Your message...'></textarea>
            <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
        </div>
    )
}

export default SendMessage;