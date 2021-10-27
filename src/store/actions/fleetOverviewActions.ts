import { FetchUnits, FetchUnitsSuccess, FetchUnitsSuccessPayload } from "../../pages/fleetOverview/Types";
import {
    FETCH_UNITS,
    FETCH_UNITS_SUCCEEDED,
    FETCH_UNITS_FAILED
} from "../actionTypes/fleetOverview";
export const fetchUnitsRequest = (): FetchUnits => ({
type: FETCH_UNITS
});
export const fetchUnitsSuccess = (
payload: FetchUnitsSuccessPayload
): FetchUnitsSuccess => ({
type: FETCH_UNITS_SUCCEEDED,
payload
});
