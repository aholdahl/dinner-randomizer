const randomRestaurantReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RANDOM_RESTAURANT':
            return action.payload;
        default:
            return state;
    }
}

export default randomRestaurantReducer;