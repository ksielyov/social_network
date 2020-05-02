import React from 'react';
import Class from './SendMessage.module.css';

import {updateMessageTextActionCreator, addNewMessageActionCreator} from '../../redux/reducers/activeDialogReducer';

const SendMessage = (props) => {
    
    let sendMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    }

    let updateMessageText = data => {
        props.store.dispatch(updateMessageTextActionCreator(data.target.value));
    }
    

    return (
        <div className={Class.sendMessage}>
            <textarea placeholder='Your message...' onChange={data => updateMessageText(data)} value={props.store.getState().messages.messageText} />
            <i onClick={() => sendMessage()} className="fa fa-paper-plane-o" aria-hidden="true"></i>
        </div>
    )

}

export default SendMessage;