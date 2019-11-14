const cuisineReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CUISINES':
            return action.payload;
        default:
            return state;
    }
}

export default cuisineReducer;