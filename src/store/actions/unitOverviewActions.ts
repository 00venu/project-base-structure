// import { FetchUnits, FetchUnitsSuccess, FetchUnitsSuccessPayload } from "../../pages/fleetOverview/Types";
import { FetchUnitsSuccess, FetchUnitsSuccessPayload } from "../../pages/unitOverview/Types";
import {
    UNIT_OVERVIEW_FETCH_UNITS,
    UNIT_OVERVIEW_FETCH_UNITS_SUCCEEDED,
    UNIT_OVERVIEW_FETCH_UNITS_FAILED
} from "../actionTypes/unitOverview";

export const fetchUnitsRequest = () => ({
type: UNIT_OVERVIEW_FETCH_UNITS
});

export const fetchUnitsSuccess = (
payload: FetchUnitsSuccessPayload
): FetchUnitsSuccess => ({
type: UNIT_OVERVIEW_FETCH_UNITS_SUCCEEDED,
payload
});
