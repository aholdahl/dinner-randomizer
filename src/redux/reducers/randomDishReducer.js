const randomDishReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_RANDOM_DISH':
            return action.payload;
        case 'CLEAR_RANDOM_DISH':
            return {};
        default:
            return state;
    }
}

export default randomDishReducer;