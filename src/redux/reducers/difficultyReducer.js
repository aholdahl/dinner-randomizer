const difficultyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DIFFICULTY':
            return action.payload;
        default:
            return state;
    }
}

export default difficultyReducer;