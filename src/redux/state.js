let store = {
    _state: {
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
    
        postTempText: '',
    },
    
    _updateProfileInputStatus(status) {
        this._state.profilePostInputActive = status;
    
        this.render(this._state);
    },
    
    _addPost() {
        this._state.postsData.push(
            {
                postText: this._state.postTempText,
                likeCount: '0',
                id: 4,
            },
        );
    
        this._state.postTempText = '';
    
        this.render(this._state);
    },
    
    _updatePostText(text) {
        this._state.postTempText = text;
    
        this.render(this._state);
    },
    
    subscribe(observer) {
        this.render = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            this._addPost();
            this._updateProfileInputStatus(false);
        }

        else if (action.type === 'UPDATE-PROFILE-INPUT-STATUS') {
            this._updateProfileInputStatus(true);
        }

        else if(action.type === 'UPDATE-POST-TEMP') {
            this._updatePostText(action.text);
        } 
    },

    render() {
        console.log('render');
    }
}

export const addNewPostActionCreator = () => {
    return {
        type : 'ADD-NEW-POST'
    };
}

export const updateProfileInputStatusActionCreator = () => {
    return {
        type : 'UPDATE-PROFILE-INPUT-STATUS'
    };
}

export const updatePostTextActionCreator = text => {
    return {
        type : 'UPDATE-POST-TEMP',
        text : text
    };
}

window.store = store;

export default store;