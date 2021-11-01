// import { FetchUnits, FetchUnitsSuccess, FetchUnitsSuccessPayload } from "../../pages/fleetOverview/Types";
import {
    FetchUnitServiceNotificationsSuccess, FetchUnitServiceNotificationsSuccessPayload
} from "../../pages/unitOverview/Types";
import {
    UNIT_FETCH_SERVICE_NOTIFICATIONS,
    UNIT_FETCH_SERVICE_NOTIFICATIONS_FAILED,
    UNIT_FETCH_SERVICE_NOTIFICATIONS_SUCCEEDED
} from "../actionTypes/unitMaintenanceLog";

export const fetchUnitServiceNotificationsRequest = () => ({
type: UNIT_FETCH_SERVICE_NOTIFICATIONS
});

export const fetchUnitServiceNotificationsSuccess = (
payload: FetchUnitServiceNotificationsSuccessPayload
): FetchUnitServiceNotificationsSuccess => ({
type: UNIT_FETCH_SERVICE_NOTIFICATIONS_SUCCEEDED,
payload
});
