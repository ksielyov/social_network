import profileReducer from './reducers/profileReducer';
import activeDialogReducer from './reducers/activeDialogReducer';

let store = {
    _state: {
        messages: {
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
        },
    
        wall: {
            postsData: [
                {
                    postText: 'Это тестовый текст, значения передаются через Props.',
                    likeCount: '23',
                    id: 1,
                },
        
                {
                    postText: 'У меня голос для изменения программы.',
                    likeCount: '228',
                    id: 2,
                },
        
                {
                    postText: 'Ага реально.',
                    likeCount: '328',
                    id: 3,
                }
            ],
        
            friendsElements: [
                {
                    src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
                    name: 'Pavel'
                }
            ],

            friendsCount: 256,
    
            profilePostInputActive: false,
        
            postTempText: ''
        },
    },
    
    _updateProfileInputStatus(status) {
        this._state.wall.profilePostInputActive = status;
    
        this.render(this._state);
    },
    
    _addPost() {
        this._state.wall.postsData.push(
            {
                postText: this._state.wall.postTempText,
                likeCount: '0',
                id: 4,
            },
        );
    
        this._state.wall.postTempText = '';

        this.render(this._state);
    },
    
    _updatePostText(text) {
        this._state.wall.postTempText = text;
    
        this.render(this._state);
    },

    _updateMessageText(text) {
        this._state.messages.messageText = text;

        this.render(this._state);
    },

    _addNewMessage() {
        this._state.messages.dialogData.push({
            src: 'https://miro.medium.com/max/2400/1*hgVVYMtzC2FjK221f-6wyA.png',
            name: 'Pavel Durov',
            message: this._state.messages.messageText,
        });

        this._state.messages.messageText = '';
        
        this.render(this._state);
    },
    
    subscribe(observer) {
        this.render = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.wall     = profileReducer(this._state.wall, action);
        this._state.messages = activeDialogReducer(this._state.messages, action);

        this.render(this._state);
    },

    render() {
        console.log('render');
    }
}

window.store = store;

export default store;