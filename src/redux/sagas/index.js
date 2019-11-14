import { all } from 'redux-saga/effects';
import cuisineSaga from './cuisineSaga.js';
import difficultySaga from './difficultySaga.js';
import dishSaga from './dishSaga.js';
import priceSaga from './priceSaga.js';
import restaurantSaga from './restaurantSaga.js';
// import sampleSaga from './sampleSaga.js';

function* rootSaga() {
    yield all([
        cuisineSaga(),
        difficultySaga(),
        dishSaga(),
        priceSaga(),
        restaurantSaga(),
        // sampleSaga(),
    ]);
}

export default rootSaga;