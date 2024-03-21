const registerReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_START': {
            return {
                loading: true,
                register: null,
                errors: null
            }
        }
        case 'REGISTER_SUCCESS':
            return {
                loading: false,
                register: action.payload,
                errors: null,
            }
        case 'REGISTER_FAILURE':
            return {
                loading: false,
                register: null,
                errors: action.payload
            }
        case 'INITIAL_STATE_REGISTER':
            return {
                loading: false,
                register: null,
                errors: null,
            }
        default:
            return state;
    }
};

export default registerReducer;