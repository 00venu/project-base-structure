import { FETCH_ALARM_REQUEST, FETCH_ALARM_POST_SUCCESS, FETCH_ALARM_POST_FAILED } from "../actions/alarmActions";


const initialState = {
    alarmData: [],
    loading: false,
    alarmDataError: {}
};

const AlarmReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case FETCH_ALARM_POST_SUCCESS: {
            return {
                ...state,
                alarmData: action.payload.alarm,
                loading:action.payload.loading,
            };
        }
        default:
            return state;
    }
};
export default AlarmReducer;