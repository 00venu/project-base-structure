import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from "axios";
import {
    UNIT_FETCH_SERVICE_NOTIFICATIONS,
    UNIT_FETCH_SERVICE_NOTIFICATIONS_FAILED,
    UNIT_FETCH_SERVICE_NOTIFICATIONS_SUCCEEDED
} from "../actionTypes/unitMaintenanceLog";
// import { API_BASE_ENDPOINT } from "../../utils/config";
// import { IUnits } from '../../components/unitOverview/unitOverView/types';
const getUnitMaintenanceLogDetails = () => axios.get<any>(`https://virtserver.swaggerhub.com/Tec128/cms_api/v1/serviceNotifications`);
function* fetchUnitMaintenanceLogDetails() {
try {
const serviceNotifications: any[] = yield call(getUnitMaintenanceLogDetails);

console.log({serviceNotifications});

yield put({ type: UNIT_FETCH_SERVICE_NOTIFICATIONS_SUCCEEDED, payload: serviceNotifications })
} catch ({message}) {
yield put({ type: UNIT_FETCH_SERVICE_NOTIFICATIONS_FAILED, message: message })
}
}
export default function* watchUnitMaintenanceLogs() {
yield all([takeLatest(UNIT_FETCH_SERVICE_NOTIFICATIONS, fetchUnitMaintenanceLogDetails)]);
}
