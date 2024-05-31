const postReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS': {
            return {
                posts: action.payload,
            }
        }
        case 'LIKE_POST': {
            const { idPost, like } = action.payload;
            const post = state.posts.find(post => post._id === idPost);

            return post ? {
                posts: state.posts.map(item => item._id === post._id ? { ...item, likes: like } : item)
            } : {
                ...state,
            }
        }
        case 'BOOK_MARK_POST': {
            const { idPost, bookmark } = action.payload;
            const post = state.posts.find(post => post._id === idPost);

            return post ? {
                posts: state.posts.map(item => item._id === post._id ? { ...item, bookmark: bookmark } : item)
            } : {
                ...state,
            }
        }
        default:
            return state;
    }
};

export default postReducer;