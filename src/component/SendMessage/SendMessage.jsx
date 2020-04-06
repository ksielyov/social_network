import React from 'react';
import Class from './SendMessage.module.css';

const SendMessage = (props) => {
    
    let messageText = React.createRef();

    let sendMessage = () => {
        alert( messageText.current.value )
    }

    return (
        <div className={Class.sendMessage}>
            <textarea ref={messageText} placeholder='Your message...'></textarea>
            <i onClick={() => sendMessage()} class="fa fa-paper-plane-o" aria-hidden="true"></i>
        </div>
    )

}

export default SendMessage;