import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchDifficulty() {
    try {
        let response = yield axios.get('/difficulty');
        yield put({
            type: 'SET_DIFFICULTY',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting difficulty levels.');
        yield console.log('Error in difficultySaga: ', error);
    }
}

function* difficultySagaRoot() {
    yield takeEvery('FETCH_DIFFICULTY', fetchDifficulty);
}

export default difficultySagaRoot;