import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchPrices() {
    try {
        let response = yield axios.get('/prices');
        yield put({
            type: 'SET_PRICES',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting prices.');
        yield console.log('Error in priceSaga: ', error);
    }
}

function* addNewPrice(action) {
    try {
        yield axios.post('/prices', action.payload);
        yield put({
            type: 'FETCH_PRICES'
        });
        yield Swal.fire('Price added successfully!');
    } catch (error) {
        yield Swal.fire('Error adding price.');
        yield console.log('Error in priceSaga: ', error);
    }
}

function* updatePrice(action) {
    try {
        yield axios.put('/prices', action.payload);
        yield put({
            type: 'FETCH_PRICES'
        });
        yield Swal.fire('Price updated successfully!');
    } catch (error) {
        yield Swal.fire('Error updating price.');
        yield console.log('Error in priceSaga: ', error);
    }
}

function* deletePrice(action) {
    try {
        yield axios.delete(`/prices/${action.payload.id}`);
        yield put({
            type: 'FETCH_PRICES'
        });
        yield Swal.fire('Price deleted successfully!');
    } catch (error) {
        yield Swal.fire('Error deleting price.');
        yield console.log('Error in priceSaga: ', error);
    }
}

function* priceSagaRoot() {
    yield takeEvery('FETCH_PRICES', fetchPrices);
    yield takeEvery('ADD_NEW_PRICE', addNewPrice);
    yield takeEvery('UPDATE_PRICE', updatePrice);
    yield takeEvery('DELETE_PRICE', deletePrice);
}

export default priceSagaRoot;