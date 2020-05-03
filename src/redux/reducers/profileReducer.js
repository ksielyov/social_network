export const addNewPostActionCreator = () => {
    return {
        type: 'ADD-NEW-POST'
    };
}

export const updateProfileInputStatusActionCreator = () => {
    return {
        type: 'UPDATE-PROFILE-INPUT-STATUS'
    };
}

export const updatePostTextActionCreator = text => {
    return {
        type: 'UPDATE-POST-TEMP',
        text: text
    };
}

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            state.postsData.push(
                {
                    postText: state.postTempText,
                    likeCount: '0',
                    id: 4,
                }
            );

            state.profilePostInputActive = false;
            state.postTempText = '';

            return state;

        case 'UPDATE-PROFILE-INPUT-STATUS':
            state.profilePostInputActive = true;

            return state;

        case 'UPDATE-PROFILE-INPUT-STATUS':
            state.profilePostInputActive = true;

            return state;

        case 'UPDATE-POST-TEMP':
            state.postTempText = action.text;

        default:
            return state;
    }
}

export default profileReducer;