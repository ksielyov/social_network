import React from 'react';
import Class from './Dialogs.module.css';

import Message from '../Message/Message';
import DialogMessage from '../DialogMessage/DialogMessage';

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
                <div className={Class.chatInfo}>
                    <div className={Class.leftContainer}>
                        <h1>Alexey Navalny</h1>
                        <p>Online</p>
                    </div>

                    <div className={Class.rightContainer}>
                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                        <img src="https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png" alt="" />
                    </div>
                </div>

                <div className={Class.content}>
                    <DialogMessage
                        src="https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png"
                        name="Alexey Navalny"
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus orci augue, eu porta dolor vulputate quis. Aliquam egestas vel enim quis porttitor. Curabitur quis scelerisque risus. Donec vestibulum lorem diam, vel interdum nisl molestie at. Nullam lacinia bibendum ornare. Morbi malesuada velit non dui posuere, eget pellentesque est condimentum. Sed imperdiet dui turpis, ut interdum libero mollis id. Quisque vulputate, nibh eget scelerisque efficitur, enim nunc ornare libero, non finibus massa tellus sit amet turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    />

                    <DialogMessage
                        src="https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png"
                        name="Alexey Navalny"
                        message="Россия без Путина не жизнеспособна."
                    />
                </div>

                <div className={Class.sendMessage}>
                    <textarea placeholder='Что у Вас нового?'></textarea>
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                </div>
                {/* <i class="fa fa-commenting-o" aria-hidden="true"></i>
                <p>Choose the user</p> */}
            </div>
        </div>
    )
}

export default Dialogs;