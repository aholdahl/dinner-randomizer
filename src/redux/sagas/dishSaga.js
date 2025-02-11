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
        yield console.log('Error in dishSaga: ', error);
    }
}

function* fetchRandomDish() {
    try {
        let response = yield axios.get('/dishes/random');
        yield put({
            type: 'CLEAR_RANDOM_RESTAURANT'
        });
        yield put({
            type: 'SET_RANDOM_DISH',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting random dish.');
        yield console.log('Error in dishSaga: ', error);
    }
}

function* addNewDish(action) {
    try {
        yield axios.post('/dishes', action.payload);
        yield put({
            type: 'FETCH_DISHES'
        });
        yield Swal.fire('Dish added successfully!');
    } catch (error) {
        yield Swal.fire('There was an error adding the new dish.');
        yield console.log('Error in dishSaga: ', error);
    }
}

function* updateDish(action) {
    try {
        yield axios.put('/dishes', action.payload);
        yield put({
            type: 'FETCH_DISHES'
        });
        yield Swal.fire('Dish updated successfully!');
    } catch (error) {
        yield Swal.fire('Error updating dish.');
        yield console.log('Error in dishSaga: ', error);
    }
}

function* deleteDish(action) {
    try {
        yield axios.delete(`/dishes/${action.payload.id}`);
        yield put({
            type: 'FETCH_DISHES'
        });
        yield Swal.fire('Dish deleted successfully!');
    } catch (error) {
        yield Swal.fire('Error deleting dish.');
        yield console.log('Error in dishSaga: ', error);
    }
}

function* dishSagaRoot() {
    yield takeEvery('FETCH_DISHES', fetchDishes);
    yield takeEvery('FETCH_RANDOM_DISH', fetchRandomDish);
    yield takeEvery('ADD_NEW_DISH', addNewDish);
    yield takeEvery('UPDATE_DISH', updateDish);
    yield takeEvery('DELETE_DISH', deleteDish);
}

export default dishSagaRoot;