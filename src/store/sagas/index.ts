// import { takeLatest, all, fork } from 'redux-saga/effects';
// import watchFleetOverview from './fleetOverview';
// export default function* rootSaga() {
// yield all([fork(watchFleetOverview)]);
// }

import { takeLatest, all, fork } from "redux-saga/effects";
import watchFleetOverview from "./fleetOverview";
import watchUnitOverview from "./unitOverview";
import watchUnitAEEMonitor from "./unitAEEMonitor";
import watchUnitMaintenanceLogs from "./unitMaintenanceLog";
import { watchAlarmData, watchDummyData } from "./alarmSaga";
import watchRoutingData from './routingTestSaga';

export default function* rootSaga() {
  yield all([
    fork(watchUnitOverview),
    fork(watchFleetOverview),
    fork(watchUnitAEEMonitor),
    fork(watchUnitMaintenanceLogs),
    fork(watchAlarmData),
    fork(watchDummyData),
    fork(watchRoutingData)
  ]);
}
