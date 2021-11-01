import { UNIT_FETCH_SERVICE_NOTIFICATIONS_SUCCEEDED } from "../actionTypes/unitMaintenanceLog";

import { IServiceNotifications } from "../../components/unitOverview/maintenancePlanning/types";

const initialState: IServiceNotifications = {
    "data" : [ {
      "defect_id" : "D-1234-DVA",
      "type" : "SN",
      "notification_description" : "Fault in Digital Voice Announcement",
      "functional_location" : "TSNSW-RS-D-D104",
      "equipment" : "Car1",
      "code_group" : "DMU-TCC",
      "status" : "DRAFT",
      "date" : "26/09/2020",
      "time" : "11:04 AM",
      "priority" : "HIGH"
    }, {
      "defect_id" : "D-1235-DVA",
      "type" : "SO",
      "notification_description" : "Fault in Digital Voice Announcement",
      "functional_location" : "TSNSW-RS-D-D104",
      "equipment" : "Car1",
      "code_group" : "DMU-TCC",
      "status" : "OPEN",
      "date" : "26/09/2020",
      "time" : "11:04 AM",
      "priority" : "HIGH"
    } ],
    "paging" : {
      "cursors" : {
        "after" : "MTAxNTExOTQ1MjAwNzI5NDE=",
        "before" : "NDMyNzQyODI3OTQw"
      },
      "previous" : "https://{endpoint}?limit=25&before=NDMyNzQyODI3OTQw",
      "next" : "https://{endpoint}?limit=25&after=MTAxNTExOTQ1MjAwNzI5NDE="
    },
    "Summary" : {
      "value" : {
        "data" : [ {
          "defect_id" : "D-1234-DVA",
          "type" : "SN",
          "notification_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "equipment" : "Car1",
          "code_group" : "DMU-TCC",
          "status" : "DRAFT",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "HIGH"
        } ],
        "paging" : {
          "cursors" : {
            "after" : "MTAxNTExOTQ1MjAwNzI5NDE=",
            "before" : "NDMyNzQyODI3OTQw"
          },
          "previous" : "https://{endpoint}?limit=25&before=NDMyNzQyODI3OTQw",
          "next" : "https://{endpoint}?limit=25&after=MTAxNTExOTQ1MjAwNzI5NDE="
        }
      }
    },
    "ServiceNotifications" : {
      "value" : {
        "data" : [ {
          "defect_id" : "D-1234-DVA",
          "type" : "SN",
          "sn_number" : "6056565656",
          "so_number" : "613454545",
          "notification_description" : "Fault in Digital Voice Announcement",
          "notificaiton_type" : "Z3",
          "functional_location" : "TSNSW-RS-D-D104",
          "equipment" : "Car1",
          "code_group" : "DMU-TCC",
          "part_of_object" : "0130",
          "coding_group_description" : "",
          "coding_code_description" : "",
          "status" : "Open",
          "priority" : "HIGH",
          "raised_by" : "Jhon",
          "long_text" : "",
          "create_datetime" : "06/06/2021 09:30:00 AM",
          "malfunctionstart_datetime" : "06/06/2021 09:30:00 AM"
        },
        {
          "defect_id" : "D-1234-DVA",
          "type" : "SN",
          "sn_number" : "6056565656",
          "so_number" : "613454545",
          "notification_description" : "Fault in Digital Voice Announcement",
          "notificaiton_type" : "Z3",
          "functional_location" : "TSNSW-RS-D-D104",
          "equipment" : "Car1",
          "code_group" : "DMU-TCC",
          "part_of_object" : "0130",
          "coding_group_description" : "",
          "coding_code_description" : "",
          "status" : "Open",
          "priority" : "LOW",
          "raised_by" : "Jhon",
          "long_text" : "",
          "create_datetime" : "06/06/2021 09:30:00 AM",
          "malfunctionstart_datetime" : "06/06/2021 09:30:00 AM"
        },
        {
          "defect_id" : "D-1234-DVA",
          "type" : "SN",
          "sn_number" : "6056565656",
          "so_number" : "613454545",
          "notification_description" : "Fault in Digital Voice Announcement",
          "notificaiton_type" : "Z3",
          "functional_location" : "TSNSW-RS-D-D104",
          "equipment" : "Car1",
          "code_group" : "DMU-TCC",
          "part_of_object" : "0130",
          "coding_group_description" : "",
          "coding_code_description" : "",
          "status" : "Open",
          "priority" : "LOw",
          "raised_by" : "Jhon",
          "long_text" : "",
          "create_datetime" : "06/06/2021 09:30:00 AM",
          "malfunctionstart_datetime" : "06/06/2021 09:30:00 AM"
        },
        {
          "defect_id" : "D-1234-DVA",
          "type" : "SN",
          "sn_number" : "6056565656",
          "so_number" : "613454545",
          "notification_description" : "Fault in Digital Voice Announcement",
          "notificaiton_type" : "Z3",
          "functional_location" : "TSNSW-RS-D-D104",
          "equipment" : "Car1",
          "code_group" : "DMU-TCC",
          "part_of_object" : "0130",
          "coding_group_description" : "",
          "coding_code_description" : "",
          "status" : "Open",
          "priority" : "HIGH",
          "raised_by" : "Jhon",
          "long_text" : "",
          "create_datetime" : "06/06/2021 09:30:00 AM",
          "malfunctionstart_datetime" : "06/06/2021 09:30:00 AM"
        },
        {
          "defect_id" : "D-1234-DVA",
          "type" : "SN",
          "sn_number" : "6056565656",
          "so_number" : "613454545",
          "notification_description" : "Fault in Digital Voice Announcement",
          "notificaiton_type" : "Z3",
          "functional_location" : "TSNSW-RS-D-D104",
          "equipment" : "Car1",
          "code_group" : "DMU-TCC",
          "part_of_object" : "0130",
          "coding_group_description" : "",
          "coding_code_description" : "",
          "status" : "Open",
          "priority" : "HIGH",
          "raised_by" : "Jhon",
          "long_text" : "",
          "create_datetime" : "06/06/2021 09:30:00 AM",
          "malfunctionstart_datetime" : "06/06/2021 09:30:00 AM"
        },
         {
          "defect_id" : "D-1235-DVA",
          "type" : "SN",
          "sn_number" : "605653333",
          "so_number" : "613455545",
          "notification_description" : "Fault in Digital Voice Announcement",
          "notificaiton_type" : "Z3",
          "functional_location" : "TSNSW-RS-D-D104",
          "equipment" : "Car1",
          "code_group" : "DMU-TCC",
          "part_of_object" : "0130",
          "coding_group_description" : "",
          "coding_code_description" : "",
          "status" : "Open",
          "priority" : "HIGH",
          "raised_by" : "Jhon",
          "long_text" : "",
          "create_datetime" : "06/06/2021 09:30:00 AM",
          "malfunctionstart_datetime" : "06/06/2021 09:30:00 AM"
        } ],
        "paging" : {
          "cursors" : {
            "after" : "MTAxNTExOTQ1MjAwNzI5NDE=",
            "before" : "NDMyNzQyODI3OTQw"
          },
          "previous" : "https://{endpoint}?limit=25&before=NDMyNzQyODI3OTQw",
          "next" : "https://{endpoint}?limit=25&after=MTAxNTExOTQ1MjAwNzI5NDE="
        }
      }
    },
    "SNDetail" : {
      "value" : {
        "sn_id" : "676765656",
        "defect_id" : "D-1234-DVA",
        "effect" : 2,
        "priority" : 3,
        "sn_datetime" : "06/06/2021 09:30:00 AM",
        "reported_by" : "RR-CMS",
        "notification_type" : "Z3",
        "notification_description" : "DVA",
        "service_order_no" : "",
        "service_order_date" : "",
        "system_status" : "OSTS",
        "key_dates" : {
          "create_datetime" : "06/06/2021 09:30:00 AM",
          "update_datetime" : "06/06/2021 09:30:00 AM",
          "malfunctionstart_datetime" : "06/06/2021 09:30:00 AM",
          "notificaion_datetime" : "06/06/2021 09:30:00 AM"
        },
        "equipment_details" : {
          "equipment" : "11232344",
          "equipment_description" : "Car1",
          "assembly" : "1000344455",
          "assembly_description" : "Wheel",
          "serial_no" : "DDA9055",
          "functional_location" : "TFSNSW-RS-D-D5",
          "functinal_loc_description" : "Intercity"
        },
        "object_details" : {
          "object_part" : "0130",
          "code_group_object" : "EMU-TCC",
          "damage_code" : "0010",
          "damage_code_group" : "UGLR-R-DMG",
          "damage_code_short_text" : "Damage Short Text",
          "cause_code" : "0022",
          "cause_code_group" : "UGLR-C02",
          "cause_short_text" : ""
        },
        "maintenance_plant_detail" : {
          "planning_plant" : "1075",
          "location" : "",
          "room" : "03-22",
          "plant_section" : "MRS",
          "maintenance_plant" : "1075",
          "coding_code" : "0010",
          "code_group" : "Global",
          "external_ref_no" : "W2345466",
          "user_status" : "OTR"
        },
        "maintenance_activity" : {
          "activity_code" : "0022",
          "activity_code_group" : "UGLR-XX",
          "activity_short_text" : "Damage"
        },
        "minimum_os_detail" : {
          "mos_ref_no" : "REF1234",
          "complete_by_date" : "2022/05/12",
          "mos_constraints" : "  NEPT"
        },
        "waiver_details" : {
          "waiver_ref_no" : "We001",
          "waiver_validity_period" : "2021-04-07",
          "waiver_constraints" : "NEPT-MTM"
        },
        "long_text" : ""
      }
    }
  };

export type Action = { type: string; payload: IServiceNotifications };
const UnitMaintenanceLogReducer = (state: IServiceNotifications = initialState, action: Action) => {
switch (action.type) {
case UNIT_FETCH_SERVICE_NOTIFICATIONS_SUCCEEDED: 
// return {
// ...state, ...action.payload
// };
return state;
default:
return state;
}
};
export default UnitMaintenanceLogReducer;