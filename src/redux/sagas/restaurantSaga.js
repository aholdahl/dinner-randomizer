import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchRestaurants() {
    try {
        let response = yield axios.get('/restaurants');
        yield put({
            type: 'SET_RESTAURANTS',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting restaurants.');
        yield console.log('Error in restaurantSaga: ', error)
    };
};

function* addNewRestaurant(action) {
    try {
        yield axios.post('/restaurants', action.payload);
        yield put({
            type: 'FETCH_RESTAURANTS'
        });
        yield Swal.fire('Restaurant added successfully!');
    } catch (error) {
        yield Swal.fire('There was an error adding the new restaurant.')
        yield console.log('Error in restaurantSaga: ', error)
    }
}

function* restaurantSagaRoot() {
    yield takeEvery('FETCH_RESTAURANTS', fetchRestaurants);
    yield takeEvery('ADD_NEW_RESTAURANT', addNewRestaurant);
}

export default restaurantSagaRoot;