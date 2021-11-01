export interface IServiceNotifications {
    data: IData[];
    paging: IPaging;
    Summary: ISummary;
    ServiceNotifications: IServiceNotificationsData;
    SNDetail: ISNDetail;
}

interface ISNDetail {
    value: ISNDetailValue;
}

interface IKeyDates {
    create_datetime: string;
    update_datetime: string;
    malfunctionstart_datetime: string;
    notificaion_datetime: string;
}

interface IEquipmentDetails {
    equipment: string;
    equipment_description: string;
    assembly: string;
    assembly_description: string;
    serial_no: string;
    functional_location: string;
    functinal_loc_description: string;
}

interface IObjectDetails {
    object_part: string;
    code_group_object: string;
    damage_code: string;
    damage_code_group: string;
    damage_code_short_text: string;
    cause_code: string;
    cause_code_group: string;
    cause_short_text: string;
}

interface IMaintenancePlantDetail {
    planning_plant: string;
    location: string;
    room: string;
    plant_section: string;
    maintenance_plant: string;
    coding_code: string;
    code_group: string;
    external_ref_no: string;
    user_status: string;
}

interface IMaintenanceActivity {
    activity_code: string;
    activity_code_group: string;
    activity_short_text: string;
}

interface IMinimumOsDetail {
    mos_ref_no: string;
    complete_by_date: string;
    mos_constraints: string;
}

interface IWaiverDetails {
    waiver_ref_no: string;
    waiver_validity_period: string;
    waiver_constraints: string;
}

interface ISNDetailValue {
    sn_id: string;
    defect_id: string;
    effect: number;
    priority: number;
    sn_datetime: string;
    reported_by: string;
    notification_type: string;
    notification_description: string;
    service_order_no: string;
    service_order_date: string;
    system_status: string;
    key_dates: IKeyDates;
    equipment_details: IEquipmentDetails;
    object_details: IObjectDetails;
    maintenance_plant_detail: IMaintenancePlantDetail;
    maintenance_activity: IMaintenanceActivity;
    minimum_os_detail: IMinimumOsDetail;
    waiver_details: IWaiverDetails
    long_text: string;
}

interface IData {
    defect_id: string;
    type: string;
    notification_description: string;
    functional_location: string;
    equipment: string;
    code_group: string;
    status: string;
    date: string;
    time: string;
    priority: string;
}

interface ISummary {
    value: ISummaryValue
}

interface ISummaryValue {
    data: IData[];
    paging: IPaging,
}

interface IPaging {
    cursors: ICursor;
    previous: string;
    next: string;
}

interface ICursor {
    after: string;
    before: string;
}

interface IServiceNotificationsData {
    value: IServiceNotificationsValue;
}

interface IServiceNotificationsValue {
    data: IServiceNotificationData[];
    paging: IPaging,
}

interface IServiceNotificationData {
    defect_id: string;
    type: string;
    sn_number: string;
    so_number: string;
    notification_description: string;
    notificaiton_type: string;
    functional_location: string;
    equipment: string;
    code_group: string;
    part_of_object: string;
    coding_group_description: string;
    coding_code_description: string;
    status: string;
    priority: string;
    raised_by: string;
    long_text: string;
    create_datetime: string;
    malfunctionstart_datetime: string;
}