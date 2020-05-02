const profileReducer = (state, action) => {
    if (action.type === 'ADD-NEW-POST') {
        state.postsData.push(
            {
                postText: state.postTempText,
                likeCount: '0',
                id: 4,
            }
        );

        state.profilePostInputActive = false;
        state.postTempText = '';
    }

    else if (action.type === 'UPDATE-PROFILE-INPUT-STATUS') {
        state.profilePostInputActive = true;
    }

    else if (action.type === 'UPDATE-POST-TEMP') {
        state.postTempText = action.text;
    }

    return state;
}

export default profileReducer;