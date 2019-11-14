const randomDishReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RANDOM_DISH':
            return action.payload;
        default:
            return state;
    }
}

export default randomDishReducer;