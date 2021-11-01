import {
    UNIT_FETCH_AEE,
    UNIT_FETCH_AEE_SUCCEEDED,
    UNIT_FETCH_AEE_FAILED
} from "../actionTypes/unitAEEMonitor";

import { IAlarm } from "../../components/unitOverview/AlaramMonitor/types";

const initialState: IAlarm = {
    "type" : "alarms",
    "data" : [ {
      "defect_id" : "D-1234-DVA",
      "defect_description" : "Fault in Digital Voice Announcement",
      "functional_location" : "TSNSW-RS-D-D104",
      "unit_status" : "In Service-Operational",
      "date" : "26/09/2020",
      "time" : "11:04 AM",
      "priority" : "LOW",
      "type" : "alarm"
    }, {
      "defect_id" : "D-1235-DVA",
      "defect_description" : "Fault in Digital Voice Announcement",
      "functional_location" : "TSNSW-RS-D-D104",
      "unit_status" : "In Service-Operational",
      "date" : "26/09/2020",
      "time" : "11:04 AM",
      "priority" : "LOW",
      "type" : "event"
    } ],
    "paging" : {
      "cursors" : {
        "after" : "MTAxNTExOTQ1MjAwNzI5NDE=",
        "before" : "NDMyNzQyODI3OTQw"
      },
      "previous" : "https://{endpoint}?limit=25&before=NDMyNzQyODI3OTQw",
      "next" : "https://{endpoint}?limit=25&after=MTAxNTExOTQ1MjAwNzI5NDE="
    },
    "AlarmsSummary" : {
      "value" : {
        "data" : [ {
          "defect_id" : "D-1234-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "LOW",
          "type" : "alarm"
        }, {
          "defect_id" : "D-1235-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "LOW",
          "type" : "event"
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
    "AlarmsList" : {
      "value" : {
        "data" : [ {
          "defect_id" : "D-1234-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "fault_condition" : "Breakdown",
          "mode" : "Operational",
          "equipment" : "Car1",
          "subsystem" : "CASS",
          "component" : "Air Condition",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "LOW",
          "type" : "alarm",
          "isAcknowledged" : false,
          "isIsolated" : false,
          "is_sn_raised" : true,
          "sn_status" : "OPEN"
        }, {
          "defect_id" : "D-1235-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "fault_condition" : "Breakdown",
          "mode" : "Stabled",
          "equipment" : "Car1",
          "subsystem" : "CASS",
          "component" : "Air Condition",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "LOW",
          "type" : "event",
          "isAcknowledged" : false,
          "isIsolated" : false,
          "is_sn_raised" : true,
          "sn_status" : "OPEN"
        },
        {
          "defect_id" : "D-1235-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "fault_condition" : "Breakdown",
          "mode" : "Stabled",
          "equipment" : "Car1",
          "subsystem" : "CASS",
          "component" : "Air Condition",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "HIGH",
          "type" : "event",
          "isAcknowledged" : false,
          "isIsolated" : false,
          "is_sn_raised" : true,
          "sn_status" : "OPEN"
        },
        {
          "defect_id" : "D-1235-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "fault_condition" : "Breakdown",
          "mode" : "Stabled",
          "equipment" : "Car1",
          "subsystem" : "CASS",
          "component" : "Air Condition",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "LOW",
          "type" : "event",
          "isAcknowledged" : false,
          "isIsolated" : false,
          "is_sn_raised" : true,
          "sn_status" : "OPEN"
        }, {
          "defect_id" : "D-1235-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "fault_condition" : "Breakdown",
          "mode" : "Stabled",
          "equipment" : "Car1",
          "subsystem" : "CASS",
          "component" : "Air Condition",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "LOW",
          "type" : "event",
          "isAcknowledged" : false,
          "isIsolated" : false,
          "is_sn_raised" : true,
          "sn_status" : "OPEN"
        }, {
          "defect_id" : "D-1235-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "fault_condition" : "Breakdown",
          "mode" : "Stabled",
          "equipment" : "Car1",
          "subsystem" : "CASS",
          "component" : "Air Condition",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "HIGH",
          "type" : "event",
          "isAcknowledged" : false,
          "isIsolated" : false,
          "is_sn_raised" : true,
          "sn_status" : "OPEN"
        },
         {
          "defect_id" : "D-1236-DVA",
          "defect_description" : "Fault in Digital Voice Announcement",
          "functional_location" : "TSNSW-RS-D-D104",
          "unit_status" : "In Service-Operational",
          "fault_condition" : "Breakdown",
          "mode" : "Stabled",
          "equipment" : "Car1",
          "subsystem" : "CASS",
          "component" : "Air Condition",
          "date" : "26/09/2020",
          "time" : "11:04 AM",
          "priority" : "LOW",
          "type" : "alert",
          "isAcknowledged" : false,
          "isIsolated" : false,
          "is_sn_raised" : true,
          "sn_status" : "OPEN"
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
    "AlarmDetail" : {
      "value" : {
        "data" : {
          "train_number" : "TN-1234",
          "train_speed" : "80 km/hr",
          "unit_number" : "UN-1234",
          "equipment" : "Car1",
          "creation_date_time" : "22/12/2020 11:04:00 AM",
          "effect" : "No Effect",
          "status" : "In Service- Operational",
          "subsystem" : "CAS",
          "component" : "Air Duct",
          "location" : {
            "longitude" : 23454.4544,
            "latitude" : 33445.6667
          }
        }
      }
    }
  };

export type Action = { type: string; payload: IAlarm };
const UnitAEEMonitorReducer = (state: IAlarm = initialState, action: Action) => {
switch (action.type) {
case UNIT_FETCH_AEE_SUCCEEDED: 
// return {
// ...state, ...action.payload
// };
return state;
default:
return state;
}
};
export default UnitAEEMonitorReducer;