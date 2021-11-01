import { UNIT_OVERVIEW_FETCH_UNITS_SUCCEEDED } from "../actionTypes/unitOverview";

import { IUnits } from "../../components/unitOverview/unitOverView/types";

const initialState: IUnits = {
    "last_scheduled_maintenancedate" : "08-12-2020",
    "next_scheduled_maintenancedate" : "08-01-2021",
    "last_washed_date" : "01-01-2021",
    "service_orders" : 5,
    "service_notifications" : 10,
    "live_tracking" : {
      "train_number" : "TN-1234",
      "speed" : "212 km/h",
      "driver" : "Jhon",
      "outside_temp" : "29 C",
      "total_no_of_cars" : 6,
      "driving_mode" : "DOD",
      "total_head_counts" : 35,
      "milage" : 478,
      "location" : {
        "longitude" : 344454.5555,
        "latitude" : 55555.3333
      }
    },
    "alarms" : {
      "count" : 5,
      "low_priority" : 3,
      "high_priority" : 2,
      "acknowledged" : 2,
      "unacknowledged" : 3
    },
    "alerts" : {
      "count" : 5,
      "low_priority" : 3,
      "high_priority" : 2,
      "acknowledged" : 2,
      "unacknowledged" : 3
    },
    "events" : {
      "count" : 5,
      "low_priority" : 3,
      "high_priority" : 2,
      "acknowledged" : 2,
      "unacknowledged" : 3
    },
    "cars" : [ {
      "car_id" : "D12234"
    }, {
      "car_id" : "D12235"
    }, {
      "car_id" : "D12236"
    } ],
    "UnitsList" : {
      "value" : {
        "data" : [ {
          "train_number" : "TN-1234",
          "unit_number" : "UN-1234",
          "alarm_source" : "AC, Wheel,Engine",
          "status" : "IN SERVICE",
          "scheduled_maintenance" : "08/01/2021",
          "availability" : "Running",
          "standing_alarms" : 3,
          "next_station" : "BanksTown",
          "service_notifications" : 15,
          "last_updated" : "08/10/2021",
          "is_primary" : true,
          "location" : {
            "longitude" : 55656.6666,
            "latitude" : 44566.7777
          }
        }, {
          "train_number" : "TN-1234",
          "unit_number" : "UN-1234",
          "alarm_source" : "AC, Wheel,Engine",
          "status" : "IN SERVICE",
          "scheduled_maintenance" : "08/01/2021",
          "availability" : "Running",
          "standing_alarms" : 3,
          "next_station" : "BanksTown",
          "service_notifications" : 15,
          "last_updated" : "08/10/2021",
          "is_primary" : true,
          "location" : {
            "longitude" : 55656.6666,
            "latitude" : 44566.7777
          }
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
    "UnitDetail" : {
      "value" : {
        "data" : {
          "last_scheduled_maintenancedate" : "08-12-2020",
          "next_scheduled_maintenancedate" : "08-01-2021",
          "last_washed_date" : "02/02/2021 10:00 AM",
          "service_orders" : 5,
          "service_notifications" : 10,
          "live_tracking" : {
            "train_number" : "TN-1234",
            "speed" : "212 km/h",
            "driver" : "Jhon",
            "outside_temp" : "29 C",
            "total_no_of_cars" : 6,
            "driving_mode" : "DOD",
            "total_head_counts" : 35,
            "milage" : 478,
            "location" : {
              "longitude" : 344454.5555,
              "latitude" : 55555.3333
            }
          },
          "alarms" : {
            "count" : 5,
            "low_priority" : 3,
            "high_priority" : 2,
            "acknowledged" : 2,
            "unacknowledged" : 3
          },
          "alerts" : {
            "count" : 5,
            "low_priority" : 3,
            "high_priority" : 2,
            "acknowledged" : 2,
            "unacknowledged" : 3
          },
          "events" : {
            "count" : 5,
            "low_priority" : 3,
            "high_priority" : 2,
            "acknowledged" : 2,
            "unacknowledged" : 3
          },
          "cars" : [ {
            "car_id" : "D12234"
          }, {
            "car_id" : "D12235"
          }, {
            "car_id" : "D12236"
          } ]
        }
      }
    }
  };

export type Action = { type: string; payload: IUnits };
const UnitOverviewReducer = (state: IUnits = initialState, action: Action) => {
switch (action.type) {
case UNIT_OVERVIEW_FETCH_UNITS_SUCCEEDED: 
// return {
// ...state, ...action.payload
// };
return state;
default:
return state;
}
};
export default UnitOverviewReducer;