const registerReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_START': {
            return {
                loading: true,
                register: false,
                errors: false,
                message: null
            }
        }
        case 'REGISTER_SUCCESS':
            return {
                loading: false,
                register: true,
                errors: false,
                message: action.payload,
            }
        case 'REGISTER_FAILURE':
            return {
                loading: false,
                register: false,
                errors: true,
                message: action.payload,
            }
        case 'INITIAL_STATE_REGISTER':
            return {
                loading: false,
                register: false,
                errors: false,
                message: null,
            }
        default:
            return state;
    }
};

export default registerReducer;