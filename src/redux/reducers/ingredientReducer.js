const ingredientReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INGREDIENTS':
            return action.payload;
        default:
            return state;
    }
}

export default ingredientReducer;