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

const profileReducer = (state, action) => {
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