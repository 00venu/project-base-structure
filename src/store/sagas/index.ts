import { takeLatest, all, fork } from "redux-saga/effects";
import watchFleetOverview from "./fleetOverview";
import watchAlarmData from "./alarmSaga";

export default function* rootSaga() {
  yield all([fork(watchFleetOverview), fork(watchAlarmData)]);
}
