export interface IUnits {
    last_scheduled_maintenancedate: string;
    next_scheduled_maintenancedate: string;
    last_washed_date: string;
    service_orders: number;
    service_notifications: number;
    live_tracking: ILiveTracking;
    alarms: IAlarms;
    alerts: IAlerts;
    events: IEvents;
    cars: ICar[];
    UnitsList: IUnitsList;
    UnitDetail: IUnitDetail;
}

interface IUnitDetail {
    value: IUnitDetailValue;
}

interface IUnitDetailValue {
    data: IUnitDetailData;
}

interface IUnitDetailData {
    last_scheduled_maintenancedate: string;
    next_scheduled_maintenancedate: string;
    last_washed_date: string;
    service_orders: number;
    service_notifications: number;
    live_tracking: ILiveTracking;
    alarms: IAlarms;
    alerts: IAlerts;
    events: IEvents;
    cars: ICar[];
}

interface IUnitsList {
    value: IUnitsValue;
}

interface IUnitsValue {
    data: IUnitData[];
    paging: IPaging;
}

interface IPaging {
    cursors: ICursors;
    previous: string;
    next: string;
}

interface ICursors {
    after: string;
    before: string;
}

interface IUnitData {
    train_number: string;
    unit_number: string;
    alarm_source: string;
    status: string;
    scheduled_maintenance: string;
    availability: string;
    standing_alarms: number;
    next_station: string;
    service_notifications: number;
    last_updated: string;
    is_primary: true,
    location: ILocation
}

interface ILiveTracking {
    train_number: string;
    speed: string;
    driver: string;
    outside_temp: string;
    total_no_of_cars: number;
    driving_mode: string;
    total_head_counts: number;
    milage: number;
    location: ILocation;
}

interface ILocation {
    longitude: number;
    latitude: number;
}

export interface IAlarms {
    count: number;
    low_priority: number;
    high_priority: number;
    acknowledged: number;
    unacknowledged: number;
}

export interface IAlerts {
    count: number;
    low_priority: number;
    high_priority: number;
    acknowledged: number;
    unacknowledged: number;
}

export interface IEvents {
    count: number;
    low_priority: number;
    high_priority: number;
    acknowledged: number;
    unacknowledged: number;
}

interface ICar {
    car_id: string;
}