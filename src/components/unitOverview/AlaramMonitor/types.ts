export interface IAlarm {
    type: string;
    data: IAlarmData[];
    paging: IPaging;
    AlarmsSummary: IAlarmsSummary;
    AlarmsList: IAlarmsList;
    AlarmDetail: IAlarmDetail;
}

interface ILocation {
    longitude: number;
    latitude: number;
}

interface IAlarmDetail {
    value: IAlarmDetailValue;
}

interface IAlarmDetailValue {
    data: IAlarmDetailValueData;
}

interface IAlarmDetailValueData {
    train_number: string;
    train_speed: string;
    unit_number: string;
    equipment: string;
    creation_date_time: string;
    effect: string;
    status: string;
    subsystem: string;
    component: string;
    location: ILocation;
}

interface IAlarmsList {
    value: IAlarmsListValue;
}

interface IAlarmsListValue {
    data: IAlarmsListValueData[];
    paging: IPaging;
}

interface IAlarmsListValueData {
    defect_id: string;
    defect_description: string;
    functional_location: string;
    unit_status: string;
    fault_condition: string;
    mode: string;
    equipment: string;
    subsystem: string;
    component: string;
    date: string;
    time: string;
    priority: string;
    type: string;
    isAcknowledged: boolean;
    isIsolated: boolean;
    is_sn_raised: boolean;
    sn_status: string;
}

interface IAlarmsSummary {
    value: IAlarmsSummaryValue;
}

interface IAlarmsSummaryValue {
    data: IAlarmData[];
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

interface IAlarmData {
    defect_id: string;
    defect_description: string;
    functional_location: string;
    unit_status: string;
    date: string;
    time: string;
    priority: string;
    type: string;
}
