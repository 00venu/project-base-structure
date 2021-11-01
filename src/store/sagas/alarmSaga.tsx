import { all, call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  FETCH_ALARM_POST_SUCCESS,
  FETCH_ALARM_REQUEST,
  PUSH_DUMMY_CONTENT,
  PUSH_DUMMY_REQUEST,
} from "../actions/alarmActions";
import {
  API_TODOS_URL,
  API_BASE_URL,
  API_TECH_BASE_ENDPOINT,
} from "../../utils/config";
import { ITodo } from "../../components/list/types";

const getAlarmData = () =>
  axios.get<any>(`${API_BASE_URL}/${API_TECH_BASE_ENDPOINT}/alarms`);

function* fetchAllalarm() {
  try {
    yield put({
      type: FETCH_ALARM_POST_SUCCESS,
      payload: { alarm: [], loading: true },
    });
    const alarm: any[] = yield call(getAlarmData);
    yield put({
      type: FETCH_ALARM_POST_SUCCESS,
      payload: { alarm, loading: false },
    });
  } catch ({ message }) {
    //yield put({ type: FETCH_TODOS_FAILED, message: message });
    console.log(message);
  }
}
export function* watchAlarmData() {
  yield all([takeLatest(FETCH_ALARM_REQUEST, fetchAllalarm)]);
}

function* dummyContent(data: any) {
  yield put({ type: PUSH_DUMMY_CONTENT, payload: data });
}

export function* watchDummyData() {
  yield all([takeLatest(PUSH_DUMMY_REQUEST, dummyContent)]);
}

//pushDummyContent
