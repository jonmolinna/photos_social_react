const postReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS': {
            return {
                posts: action.payload,
            }
        }
        default:
            return state;
    }
};

export default postReducer;