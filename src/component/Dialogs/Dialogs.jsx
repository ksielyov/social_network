import React from 'react';
import Class from './Dialogs.module.css';

import Message from '../Message/Message';

const Dialogs = () => {
    return (
        <div className={Class.dialogsWrapper}>
            <div className={Class.dialogs}>
                <Message
                    src="https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png"
                    name="Pavel Durov"
                    id="3"
                    senderName="Me"
                    // message=""
                    messageSlip="I read now."
                />

                <Message
                    src="https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png"
                    name="Alexey Navalny"
                    senderName="Alexey"
                    id="4"
                    // message=""
                    messageSlip="Yes"
                />
            </div>
            <div className={Class.chat}>
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                <p>Choose the user</p>
            </div>
        </div>
    )
}

export default Dialogs;