import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createTodoSaga, deleteTodoSaga, getTodosSaga } from './todoSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TODO_REQUEST, getTodosSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TODO_REQUEST, createTodoSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TODO_REQUEST, deleteTodoSaga);
}

export default rootSaga;
