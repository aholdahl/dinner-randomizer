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
        yield console.log('Error in priceSaga: ', error)
    };
};

function* cuisineSagaRoot() {
    yield takeEvery('FETCH_PRICES', fetchPrices);
}

export default cuisineSagaRoot;