import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchDishes() {
    try {
        let response = yield axios.get('/dishes');
        yield put({
            type: 'SET_DISHES',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting dishes.');
        yield console.log('Error in dishSaga: ', error)
    };
};

function* addNewDish(action) {
    try {
        yield axios.post('/dish', action.payload);
        yield put({
            type: 'FETCH_DISHES'
        });
        yield Swal.fire('Dish added successfully!');
    } catch (error) {
        yield Swal.fire('There was an error adding the new dish.')
        yield console.log('Error in dishSaga: ', error)
    }
}

function* dishSagaRoot() {
    yield takeEvery('FETCH_DISHES', fetchDishes);
    yield takeEvery('ADD_NEW_DISH', addNewDish);
}

export default dishSagaRoot;