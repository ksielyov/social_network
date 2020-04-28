let render = () => {}

let state = {
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

    postTempText: ''
}

export const addPost = () => {
    state.postsData.push(
        {
            postText: state.postTempText,
            likeCount: '0',
            id: 4,
        },
    );

    state.postTempText = '';

    render(state);
}

export const updateProfileInputStatus = status => {
    state.profilePostInputActive = status;

    render(state);
}

export const updatePostText = text => {
    state.postTempText = text;

    render(state);
}

export const subscribe = observer => {
    render = observer;
}

window.state = state;

export default state;