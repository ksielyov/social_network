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

const activeDialogReducer = (state, action) => {    
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