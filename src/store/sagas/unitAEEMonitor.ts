import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from "axios";
     import {
        UNIT_FETCH_AEE,
        UNIT_FETCH_AEE_SUCCEEDED,
        UNIT_FETCH_AEE_FAILED
    } from "../actionTypes/unitAEEMonitor";
// import { API_BASE_ENDPOINT } from "../../utils/config";
// import { IUnits } from '../../components/unitOverview/unitOverView/types';
const getUnitAEEMonitorDetails = () => axios.get<any>(`https://virtserver.swaggerhub.com/Tec128/cms_api/v1/alarms`);
function* fetchUnitAEEMonitorDetails() {
try {
const alarms: any[] = yield call(getUnitAEEMonitorDetails);

console.log({alarms});

yield put({ type: UNIT_FETCH_AEE_SUCCEEDED, payload:alarms })
} catch ({message}) {
yield put({ type: UNIT_FETCH_AEE_FAILED, message: message })
}
}
export default function* watchUnitAEEMonitor() {
yield all([takeLatest(UNIT_FETCH_AEE, fetchUnitAEEMonitorDetails)]);
}

