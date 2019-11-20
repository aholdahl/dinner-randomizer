import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer.js';
import difficultyReducer from './difficultyReducer.js';
import dishReducer from './dishReducer.js';
import priceReducer from './priceReducer.js';
import restaurantReducer from './restaurantReducer.js';
// import sampleReducer from './sampleReducer.js';

const rootReducer = combineReducers({
    categoryReducer,
    difficultyReducer,
    dishReducer,
    priceReducer,
    restaurantReducer,
    // sampleReducer,
});

export default rootReducer;