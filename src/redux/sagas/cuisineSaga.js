import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchCuisines() {
    try {
        let response = yield axios.get('/cuisines');
        yield put({
            type: 'SET_CUISINES',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting cuisines.');
        yield console.log('Error in cuisineSaga: ', error)
    };
};

function* cuisineSagaRoot() {
    yield takeEvery('FETCH_CUISINES', fetchCuisines);
}

export default cuisineSagaRoot;