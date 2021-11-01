import {
    UNIT_OVERVIEW_FETCH_UNITS,
    UNIT_OVERVIEW_FETCH_UNITS_SUCCEEDED,
    UNIT_OVERVIEW_FETCH_UNITS_FAILED
} from "../../store/actionTypes/unitOverview";

import {
    UNIT_FETCH_AEE,
    UNIT_FETCH_AEE_SUCCEEDED,
    UNIT_FETCH_AEE_FAILED
} from "../../store/actionTypes/unitAEEMonitor";

import {
    UNIT_FETCH_SERVICE_NOTIFICATIONS,
    UNIT_FETCH_SERVICE_NOTIFICATIONS_SUCCEEDED,
    UNIT_FETCH_SERVICE_NOTIFICATIONS_FAILED
} from "../../store/actionTypes/unitMaintenanceLog";

import { IUnits } from "../../components/unitOverview/unitOverView/types";
import { IAlarm } from "../../components/unitOverview/AlaramMonitor/types";
import { IServiceNotifications } from "../../components/unitOverview/maintenancePlanning/types";

export interface FetchUnitsSuccessPayload {
    units: IUnits[];
}
export interface FetchUnitsFailurePayload {
    error: string;
}

export interface FetchUnitAEEMonitorSuccessPayload {
    alarms: IAlarm[];
}

export interface FetchUnitServiceNotificationsSuccessPayload {
    serviceNotifications: IServiceNotifications[];
}
export interface FetchUnitAEEMonitorFailurePayload {
    error: string;
}

export interface FetchUnitServiceNotificationsFailurePayload {
    error: string;
}

export interface FetchUnits {
    type: typeof UNIT_OVERVIEW_FETCH_UNITS;
}
export type FetchUnitsSuccess = {
    type: typeof UNIT_OVERVIEW_FETCH_UNITS_SUCCEEDED;
    payload: FetchUnitsSuccessPayload;
};
export type FetchunitsFailure = {
    type: typeof UNIT_OVERVIEW_FETCH_UNITS_FAILED;
    payload: FetchUnitsFailurePayload;
};
export type UnitOverviewActions =
    | FetchUnits
    | FetchUnitsSuccess
    | FetchunitsFailure;

export interface FetchUnitAEEMonitor {
    type: typeof UNIT_FETCH_AEE;
}
export type FetchUnitAEEMonitorSuccess = {
    type: typeof UNIT_FETCH_AEE_SUCCEEDED;
    payload: FetchUnitAEEMonitorSuccessPayload;
};
export type FetchUnitAEEMonitorFailure = {
    type: typeof UNIT_FETCH_AEE_FAILED;
    payload: FetchUnitAEEMonitorFailurePayload;
};
export type UnitAEEMonitorActions =
    | FetchUnitAEEMonitor
    | FetchUnitAEEMonitorSuccess
    | FetchUnitAEEMonitorFailure;

export interface FetchUnitServiceNotifications {
    type: typeof UNIT_FETCH_SERVICE_NOTIFICATIONS;
}
export type FetchUnitServiceNotificationsSuccess = {
    type: typeof UNIT_FETCH_SERVICE_NOTIFICATIONS_SUCCEEDED;
    payload: FetchUnitServiceNotificationsSuccessPayload;
};
export type FetchUnitServiceNotificationsFailure = {
    type: typeof UNIT_FETCH_SERVICE_NOTIFICATIONS_FAILED;
    payload: FetchUnitServiceNotificationsFailurePayload;
};
export type UnitServiceNotificationsActions =
    | FetchUnitServiceNotifications
    | FetchUnitServiceNotificationsSuccess
    | FetchUnitServiceNotificationsFailure;