import {
    FETCH_UNITS,
    FETCH_UNITS_SUCCEEDED,
    FETCH_UNITS_FAILED
} from "../../store/actionTypes/fleetOverview";

export interface IUnits {
    train_number: string;
    unit_number: string;
    alarm_source: string;
    scheduled_maintenance: string;
    availability: string;
    standing_alarms: number;
    next_station: string;
    service_notifications: string;
    last_updated: string;
    is_primary: boolean;
    location: object;
}

export interface RootState {
    list: any;
}
export interface FetchUnitsSuccessPayload {
    todos: IUnits[];
}
export interface FetchUnitsFailurePayload {
    error: string;
}

export interface FetchUnits {
    type: typeof FETCH_UNITS;
}
export type FetchUnitsSuccess = {
    type: typeof FETCH_UNITS_SUCCEEDED;
    payload: FetchUnitsSuccessPayload;
};
export type FetchunitsFailure = {
    type: typeof FETCH_UNITS_FAILED;
    payload: FetchUnitsFailurePayload;
};
export type FleetOverviewActions =
    | FetchUnits
    | FetchUnitsSuccess
    | FetchunitsFailure;