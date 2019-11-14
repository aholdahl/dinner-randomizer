import { combineReducers } from 'redux';
// import sampleReducer from './sampleReducer.js';
import dishReducer from './dishReducer.js';
import restaurantReducer from './restaurantReducer.js';
import cuisineReducer from './cuisineReducer.js';
import difficultyReducer from './difficultyReducer.js';

const rootReducer = combineReducers({
    // sampleReducer,
    dishReducer,
    restaurantReducer,
    cuisineReducer,
    difficultyReducer,
});

export default rootReducer;