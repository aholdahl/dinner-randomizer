import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2';

function* fetchCategories() {
    try {
        let response = yield axios.get('/categories');
        yield put({
            type: 'SET_CATEGORIES',
            payload: response.data
        });
    } catch (error) {
        yield Swal.fire('Error getting categories.');
        yield console.log('Error in categorySaga: ', error);
    }
}

function* addNewCategory(action) {
    try {
        yield axios.post('/categories', action.payload);
        yield put({
            type: 'FETCH_CATEGORIES'
        });
        yield Swal.fire('Category added successfully!');
    } catch (error) {
        yield Swal.fire('Error adding category.');
        yield console.log('Error in categorySaga: ', error);
    }
}

function* updateCategory(action) {
    try {
        yield axios.put('/categories', action.payload);
        yield put({
            type: 'FETCH_CATEGORIES'
        });
        yield Swal.fire('Category updated successfully!');
    } catch (error) {
        yield Swal.fire('Error updating category.');
        yield console.log('Error in categorySaga: ', error);
    }
}

function* deleteCategory(action) {
    try {
        yield axios.delete(`/categories/${action.payload.id}`);
        yield put({
            type: 'FETCH_CATEGORIES'
        });
        yield Swal.fire('Category deleted successfully!');
    } catch (error) {
        yield Swal.fire('Error deleting category.');
        yield console.log('Error in categorySaga: ', error);
    }
}

function* categorySagaRoot() {
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
    yield takeEvery('ADD_NEW_CATEGORY', addNewCategory);
    yield takeEvery('UPDATE_CATEGORY', updateCategory);
    yield takeEvery('DELETE_CATEGORY', deleteCategory);
}

export default categorySagaRoot;