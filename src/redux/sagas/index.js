import { all } from 'redux-saga/effects';
// import sampleSaga from './sampleSaga.js';
import dishSaga from './dishSaga.js';
function* rootSaga() {
    yield all([
        // sampleSaga(),
        dishSaga(),
    ])
}

export default rootSaga;