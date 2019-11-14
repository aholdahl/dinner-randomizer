import { all } from 'redux-saga/effects';
// import sampleSaga from './sampleSaga.js';
import dishSaga from './dishSaga.js';
import restaurantSaga from './restaurantSaga.js';
import cuisineSaga from './cuisineSaga.js';
import difficultySaga from './difficultySaga.js';

function* rootSaga() {
    yield all([
        // sampleSaga(),
        dishSaga(),
        restaurantSaga(),
        cuisineSaga(),
        difficultySaga(),
    ])
}

export default rootSaga;