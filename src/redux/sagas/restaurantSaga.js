import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchRestaurants() {
    try {
        let response = yield axios.get('/restaurants/all');
        yield put({
            type: 'SET_RESTAURANTS',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting restaurants.');
        yield console.log('Error in restaurantSaga: ', error);
    }
}

function* fetchRandomRestaurant() {
    try {
        let response = yield axios.get('/restaurants/random');
        yield Swal.fire('You will be eating at: ', response.data.restaurant);
        // yield put({
        //     type: 'SET_RANDOM_RESTAURANT',
        //     payload: response.data
        // });
    } catch (error) {
        yield Swal.fire('Error getting random restaurant.');
        yield console.log('Error in restaurantSaga: ', error);
    }
}

function* addNewRestaurant(action) {
    try {
        yield axios.post('/restaurants', action.payload);
        yield put({
            type: 'FETCH_RESTAURANTS'
        });
        yield Swal.fire('Restaurant added successfully!');
    } catch (error) {
        yield Swal.fire('There was an error adding the new restaurant.');
        yield console.log('Error in restaurantSaga: ', error);
    }
}

function* updateRestaurant(action) {
    try {
        yield axios.put('/restaurants', action.payload);
        yield put({
            type: 'FETCH_RESTAURANTS'
        });
        yield Swal.fire('Restaurant updated successfully!');
    } catch (error) {
        yield Swal.fire('Error updating restaurant.');
        yield console.log('Error in restaurantSaga: ', error);
    }
}

function* deleteRestaurant(action) {
    try {
        yield axios.delete(`/restaurants/${action.payload.id}`);
        yield put({
            type: 'FETCH_RESTAURANTS'
        });
        yield Swal.fire('Restaurant deleted successfully!');
    } catch (error) {
        yield Swal.fire('Error deleting restaurant.');
        yield console.log('Error in restaurantSaga: ', error);
    }
}

function* restaurantSagaRoot() {
    yield takeEvery('FETCH_RESTAURANTS', fetchRestaurants);
    yield takeEvery('FETCH_RANDOM_RESTAURANT', fetchRandomRestaurant);
    yield takeEvery('ADD_NEW_RESTAURANT', addNewRestaurant);
    yield takeEvery('UPDATE_RESTAURANT', updateRestaurant);
    yield takeEvery('DELETE_RESTAURANT', deleteRestaurant);
}

export default restaurantSagaRoot;