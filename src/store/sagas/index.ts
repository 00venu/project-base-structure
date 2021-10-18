import { takeLatest, all, fork } from 'redux-saga/effects';
import watchTodos from './list';
export default function* rootSaga() {
yield all([fork(watchTodos)]);
}