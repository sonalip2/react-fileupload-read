const hourLog = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_EDIT_HOUR_LOG':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default hourLog;