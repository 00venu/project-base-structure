import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from "axios";
import { FETCH_UNITS, FETCH_UNITS_SUCCEEDED, FETCH_UNITS_FAILED } from '../actionTypes/fleetOverview';
import { API_BASE_ENDPOINT } from "../../utils/config";
import { IUnits } from '../../pages/fleetOverview/Types';
const getFleetOverviewUnits = () => axios.get<IUnits[]>(`https://virtserver.swaggerhub.com/Tec128/cms_api/v1/fleet`);
function* fetchFleetOverviewUnits() {
try {
const fleetUnits: IUnits[] = yield call(getFleetOverviewUnits);

yield put({ type: FETCH_UNITS_SUCCEEDED, payload:fleetUnits })
} catch ({message}) {
yield put({ type: FETCH_UNITS_FAILED, message: message })
}
}
export default function* watchFleetOverview() {
yield all([takeLatest(FETCH_UNITS, fetchFleetOverviewUnits)]);
}