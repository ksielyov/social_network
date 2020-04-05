import React from 'react';
import Class from './Dialogs.module.css';

import Message from '../Message/Message';
import DialogMessage from '../DialogMessage/DialogMessage';
import ChatInfo from '../ChatInfo/ChatInfo';
import SendMessage from '../SendMessage/SendMessage';

const Dialogs = (props) => {

    let messages = props.dialogData.map(
        data => <DialogMessage
            src={data.src}
            name={data.name}
            message={data.message}
        />
    );

    let messagesDialog = props.messagesDialogData.map(
        data => <Message
            src={data.src}
            name={data.name}
            id={data.id}
            senderName={data.senderName}
            // message=""
            messageSlip={data.messageSlip}
        />
    );

    return (
        <div className={Class.dialogsWrapper}>

            <div className={Class.dialogs}>{messagesDialog}</div>

            <div className={Class.chat}>

                <ChatInfo
                    senderName="Alexey Navalny"
                    status="Online"
                    ava="https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png"
                />

                <div className={Class.content}>{messages}</div>

                <SendMessage />
                {/* <i class="fa fa-commenting-o" aria-hidden="true"></i>
                <p>Choose the user</p> */}

            </div>

        </div>
    )
}

export default Dialogs;