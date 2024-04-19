const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START': {
            return {
                loading: true,
                auth: null,
                errors: false,
                message: null,
            }
        }
        case 'LOGIN_SUCCESS': {
            const { auth, message } = action.payload;
            return {
                loading: false,
                auth,
                errors: false,
                message,
            }
        }
        case 'LOGIN_FAILURE': {
            return {
                loading: false,
                auth: null,
                errors: true,
                message: action.payload
            }
        }
        case 'LOGOUT': {
            return {
                loading: false,
                auth: null,
                errors: false,
                message: null,
            }
        }
        case 'INITIAL_STATE_AUTH': {
            return {
                loading: false,
                auth: null,
                errors: false,
                message: null,
            }
        }
        default:
            return state;
    }
};

export default authReducer;