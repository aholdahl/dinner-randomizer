import { combineReducers } from 'redux';
// import sampleReducer from './sampleReducer.js';
import dishReducer from './dishReducer.js';
import restaurantReducer from './restaurantReducer.js';
import cuisineReducer from './cuisineReducer.js';
import difficultyReducer from './difficultyReducer.js';
import priceReducer from './priceReducer.js';

const rootReducer = combineReducers({
    // sampleReducer,
    dishReducer,
    restaurantReducer,
    cuisineReducer,
    difficultyReducer,
    priceReducer,
});

export default rootReducer;