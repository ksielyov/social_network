const activeDialogReducer = (state, action) => {    
    if (action.type === 'UPDATE-MESSAGE-TEXT') {
        state.messageText = action.text;
    }

    else if (action.type === 'ADD-NEW-MESSAGE') {
        state.dialogData.push({
            src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
            name: 'Pavel Durov',
            message: state.messageText,
        });

        state.messageText = '';
    }

    return state;
}

export default activeDialogReducer;