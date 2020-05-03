export const updateMessageTextActionCreator = text => {
    return {
        type : 'UPDATE-MESSAGE-TEXT',
        text : text
    };
}

export const addNewMessageActionCreator = () => {
    return {
        type : 'ADD-NEW-MESSAGE',
    };
}

let initialState = {
    messagesDialogData: [
        {
            src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
            name: 'Pavel Durov',
            id: 4,
            senderName: 'Me',
            messageSlip: 'I read now.',
        },

        {
            src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
            name: 'Alexey Navalny',
            id: 3,
            senderName: 'Alexey',
            messageSlip: 'Yes',
        },
    ],

    dialogData: [
        {
            src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
            name: 'Alexey Navalny',
            message: 'Россия без Путина не жизнеспособна.',
        },

        {
            src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
            name: 'Pavel Durov',
            message: 'Тут тупо сыглы.',
        },
    ],

    messageText: ''
};

const activeDialogReducer = (state = initialState, action) => {    
    switch (action.type) {
        case 'UPDATE-MESSAGE-TEXT':
            state.messageText = action.text;
            
            return state;
        
        case 'ADD-NEW-MESSAGE':
            state.dialogData.push({
                src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
                name: 'Pavel Durov',
                message: state.messageText,
            });
    
            state.messageText = '';
            
            return state;
        
        default:
            return state;

    }
}

export default activeDialogReducer;