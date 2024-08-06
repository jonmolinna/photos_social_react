const profileReducer = (state, action) => {
    switch (action.type) {
        case 'PROFILE_USER': {
            return {
                ...state,
                profile: action.payload,
            }
        }
        default:
            return state;
    }
};

export default profileReducer;