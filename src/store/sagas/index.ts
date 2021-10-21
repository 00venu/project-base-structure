import { takeLatest, all, fork } from 'redux-saga/effects';
import watchTodos from './list';
import watchAlarmData from './alarmSaga';

export default function* rootSaga() {
    yield all([fork([watchTodos, watchAlarmData])]);
}