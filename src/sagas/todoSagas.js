import { put } from 'redux-saga/effects';
import * as ActionCreators from '../actions';
import * as API from '../api';

export function * getTodosSaga (action) {
  try {
    const {
      data: { data: todos },
    } = yield API.getTodos();

    yield put(ActionCreators.getTodosSuccess({ todos }));
  } catch (error) {
    yield put(ActionCreators.getTodosError({ error }));
  }
}

export function * createTodoSaga (action) {
  try {
    const {
      payload: { todo },
    } = action;

    const {
      data: { data: newTodo },
    } = yield API.createTodo(todo);

    yield put(ActionCreators.createTodoSuccess({ todo: newTodo }));
  } catch (error) {
    yield put(ActionCreators.createTodoError({ error }));
  }
}

export function * deleteTodoSaga (action) {
  try {
    const {
      payload: { id },
    } = action;

    const {
      data: { data },
    } = yield API.deleteTodo({ id });

    yield put(ActionCreators.deleteTodoSuccess({ id }));
  } catch (error) {
    yield put(ActionCreators.deleteTodoError({ error }));
  }
}