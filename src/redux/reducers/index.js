import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer.js';
import difficultyReducer from './difficultyReducer.js';
import dishReducer from './dishReducer.js';
import ingredientReducer from './ingredientReducer.js';
import priceReducer from './priceReducer.js';
import restaurantReducer from './restaurantReducer.js';
import randomDishReducer from './randomDishReducer.js';
import randomRestaurantReducer from './randomRestaurantReducer.js';
// import sampleReducer from './sampleReducer.js';

const rootReducer = combineReducers({
    categoryReducer,
    difficultyReducer,
    dishReducer,
    ingredientReducer,
    priceReducer,
    restaurantReducer,
    randomDishReducer,
    randomRestaurantReducer,
    // sampleReducer,
});

export default rootReducer;