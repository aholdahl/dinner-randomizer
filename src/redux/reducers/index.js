import { combineReducers } from 'redux';
import cuisineReducer from './cuisineReducer.js';
import difficultyReducer from './difficultyReducer.js';
import dishReducer from './dishReducer.js';
import priceReducer from './priceReducer.js';
import restaurantReducer from './restaurantReducer.js';
// import sampleReducer from './sampleReducer.js';

const rootReducer = combineReducers({
    cuisineReducer,
    difficultyReducer,
    dishReducer,
    priceReducer,
    restaurantReducer,
    // sampleReducer,
});

export default rootReducer;