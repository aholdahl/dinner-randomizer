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
        yield console.log('Error in cuisineSaga: ', error);
    }
}

function* addNewCuisine(action) {
    try {
        yield axios.post('/cuisines', action.payload);
        yield put({
            type: 'FETCH_CUISINES'
        });
        yield Swal.fire('Cuisine added successfully!');
    } catch (error) {
        yield Swal.fire('Error adding cuisine.');
        yield console.log('Error in cuisineSaga: ', error);
    }
}

function* cuisineSagaRoot() {
    yield takeEvery('FETCH_CUISINES', fetchCuisines);
    yield takeEvery('ADD_NEW_CUISINE', addNewCuisine);
}

export default cuisineSagaRoot;