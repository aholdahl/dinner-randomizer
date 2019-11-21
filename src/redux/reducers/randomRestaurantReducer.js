const randomRestaurantReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_RANDOM_RESTAURANT':
            return action.payload;
        case 'CLEAR_RANDOM_RESTAURANT':
            return {};
        default:
            return state;
    }
}

export default randomRestaurantReducer;