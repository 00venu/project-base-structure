export const FETCH_ALARM_REQUEST = 'FETCH_ALARM_REQUEST';
export const FETCH_ALARM_POST_SUCCESS = 'FETCH_ALARM_POST_SUCCESS';
export const FETCH_ALARM_POST_FAILED = 'FETCH_ALARM_POST_FAILED';

export const fetchAlarmRequest = (): any => ({
    type: FETCH_ALARM_REQUEST
});

export const fetchAlarmPostsSuccess = (payload: any) => ({
    type: FETCH_ALARM_POST_SUCCESS,
    payload
});

export const fetchAlarmPostsFaild = (payload: any) => ({
    type: FETCH_ALARM_POST_FAILED,
    payload
});
