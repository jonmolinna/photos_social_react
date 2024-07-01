const postReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS': {
            return {
                ...state,
                posts: action.payload,
            }
        }
        case 'LIKE_POST': {
            const { idPost, like } = action.payload;
            const post = state.posts.find(post => post._id === idPost);

            return post ? {
                ...state,
                posts: state.posts.map(item => item._id === post._id ? { ...item, likes: like } : item)
            } : {
                ...state,
            }
        }
        case 'BOOK_MARK_POST': {
            const { idPost, bookmark } = action.payload;
            const post = state.posts.find(post => post._id === idPost);

            return post ? {
                ...state,
                posts: state.posts.map(item => item._id === post._id ? { ...item, bookmark: bookmark } : item)
            } : {
                ...state,
            }
        }
        case 'ADD_COMMENT_TO_POST': {
            const { idPost, comment } = action.payload;
            const post = state.posts.find(post => post._id === idPost);

            return post ? {
                ...state,
                posts: state.posts.map(item => item._id === post._id ? { ...item, comments: [comment, ...item.comments] } : item)
            } : {
                ...state,
            }
        }
        case 'DELETE_COMMENT_TO_POST': {
            const { postId, comments } = action.payload;
            const post = state.posts.find(post => post._id === postId);

            return post ? {
                ...state,
                posts: state.posts.map(item => item._id === post._id ? { ...item, comments: comments } : item)
            } : {
                ...state,
            }
        }
        default:
            return state;
    }
};

export default postReducer;