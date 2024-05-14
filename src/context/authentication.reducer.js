const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START': {
            return {
                loading: true,
                auth: null,
                token: null,
                errors: false,
                message: null,
            }
        }
        case 'LOGIN_SUCCESS': {
            const { auth, message } = action.payload;
            if (auth) {
                localStorage.setItem('photos_token', JSON.stringify(auth));
            }
            return {
                loading: false,
                auth: null,
                token: null,
                errors: false,
                message: message,
            }
        }
        case 'LOGIN_FAILURE': {
            return {
                loading: false,
                auth: null,
                token: null,
                errors: true,
                message: action.payload
            }
        }
        case 'ADD_TOKEN': {
            return {
                ...state,
                token: action.payload,
            }
        }
        case 'GET_PROFILE_USER_START': {
            return {
                loading: true,
                auth: null,
                token: null,
                errors: false,
                message: null,
            }
        }
        case 'GET_PROFILE_USER_SUCCESS': {
            const { auth, message, token } = action.payload;
            return {
                loading: false,
                auth: auth,
                token: token,
                errors: false,
                message: message
            }
        }
        case 'GET_PROFILE_USER_FAILURE': {
            return {
                loading: false,
                auth: null,
                token: null,
                errors: true,
                message: action.payload,
            }
        }
        default:
            return state;
    }
};

export default authReducer;