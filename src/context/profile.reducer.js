const profileReducer = (state, action) => {
    switch (action.type) {
        case 'PROFILE_USER': {
            return {
                ...state,
                profile: action.payload,
            }
        }
        case 'PROFILE_CREAR':
            return {
                profile: null,
            }
        default:
            return state;
    }
};

export default profileReducer;