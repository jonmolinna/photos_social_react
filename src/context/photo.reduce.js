const photoReduce = (state, action) => {
    switch (action.type) {
        case 'GET_ONE_PHOTO': {
            return {
                ...state,
                photo: action.payload
            }
        }
        case 'CLEAR_STATE_PHOTO': {
            return {
                ...state,
                photo: null
            }
        }
        default:
            return state;
    }
}

export default photoReduce;