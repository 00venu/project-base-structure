// import { FetchUnits, FetchUnitsSuccess, FetchUnitsSuccessPayload } from "../../pages/fleetOverview/Types";
import {
    FetchUnitAEEMonitorSuccess, FetchUnitAEEMonitorSuccessPayload
} from "../../pages/unitOverview/Types";
import {
    UNIT_FETCH_AEE,
    UNIT_FETCH_AEE_SUCCEEDED,
    UNIT_FETCH_AEE_FAILED
} from "../actionTypes/unitAEEMonitor";

export const fetchUnitAEEMonitorRequest = () => ({
    type: UNIT_FETCH_AEE
});

export const fetchUnitAEEMonitorSuccess = (
    payload: FetchUnitAEEMonitorSuccessPayload
): FetchUnitAEEMonitorSuccess => ({
    type: UNIT_FETCH_AEE_SUCCEEDED,
    payload
});
