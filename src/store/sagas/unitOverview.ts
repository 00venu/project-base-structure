import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from "axios";
import { UNIT_OVERVIEW_FETCH_UNITS, UNIT_OVERVIEW_FETCH_UNITS_SUCCEEDED, UNIT_OVERVIEW_FETCH_UNITS_FAILED } from '../actionTypes/unitOverview';
// import { API_BASE_ENDPOINT } from "../../utils/config";
// import { IUnits } from '../../components/unitOverview/unitOverView/types';
const getUnitOverviewDetails = () => axios.get<any>(`https://virtserver.swaggerhub.com/Tec128/cms_api/v1/units`);
function* fetchUnitOverviewDetails() {
try {
const units: any[] = yield call(getUnitOverviewDetails);

console.log({units});

yield put({ type: UNIT_OVERVIEW_FETCH_UNITS_SUCCEEDED, payload:units })
} catch ({message}) {
yield put({ type: UNIT_OVERVIEW_FETCH_UNITS_FAILED, message: message })
}
}
export default function* watchUnitOverview() {
yield all([takeLatest(UNIT_OVERVIEW_FETCH_UNITS, fetchUnitOverviewDetails)]);
}

// import { all, call, put, takeLatest } from 'redux-saga/effects';
// import axios, { AxiosResponse } from "axios";
// import { FETCH_ALARM_POST_SUCCESS, FETCH_ALARM_REQUEST } from '../actions/alarmActions';
// import { API_TODOS_URL, API_BASE_URL, API_TECH_BASE_ENDPOINT } from "../../utils/config";
// import { ITodo } from '../../components/list/types';

// const getAlarmData = () => axios.get<any>(`${API_BASE_URL}/${API_TECH_BASE_ENDPOINT}/alarms`);

// function* fetchAllalarm() {
//     try {
//         yield put({ type: FETCH_ALARM_POST_SUCCESS, payload: { alarm: [], loading: true } });
//         const alarm: any[] = yield call(getAlarmData);
//         yield put({ type: FETCH_ALARM_POST_SUCCESS, payload: { alarm, loading: false } });
//     } catch ({ message }) {
//         //yield put({ type: FETCH_TODOS_FAILED, message: message });
//         console.log(message)
//     }
// }
// export default function* watchAlarmData() {
//     yield all([takeLatest(FETCH_ALARM_REQUEST, fetchAllalarm)]);
// }