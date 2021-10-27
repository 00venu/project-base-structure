import { FETCH_UNITS_SUCCEEDED } from "../actionTypes/fleetOverview";

import { IFleetOverviewUnitsState } from "./types";

const initialState = {
fleetOverview: [],

};
export type Action = { type: string; payload: string };
const FleetReducer = (state: IFleetOverviewUnitsState = initialState, action: Action) => {
switch (action.type) {
case FETCH_UNITS_SUCCEEDED: {
return {
...state,
fleetOverview: action.payload,
};
}
default:
return state;
}
};
export default FleetReducer;