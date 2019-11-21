import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchIngredients() {
    try {
        let response = yield axios.get('/ingredients');
        yield put({
            type: 'SET_INGREDIENTS',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting ingredients.');
        yield console.log('Error in ingredientSaga: ', error);
    }
}

function* addNewIngredient(action) {
    try {
        yield axios.post('/ingredients', action.payload);
        yield put({
            type: 'FETCH_INGREDIENTS'
        });
        yield Swal.fire('Ingredient added successfully!');
    } catch (error) {
        yield Swal.fire('Error adding ingredient.');
        yield console.log('Error in ingredientSaga: ', error);
    }
}

function* ingredientSagaRoot() {
    yield takeEvery('FETCH_INGREDIENTS', fetchIngredients);
    yield takeEvery('ADD_NEW_INGREDIENT', addNewIngredient);
}

export default ingredientSagaRoot;