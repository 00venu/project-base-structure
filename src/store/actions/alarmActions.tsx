export const FETCH_ALARM_REQUEST = "FETCH_ALARM_REQUEST";
export const FETCH_ALARM_POST_SUCCESS = "FETCH_ALARM_POST_SUCCESS";
export const FETCH_ALARM_POST_FAILED = "FETCH_ALARM_POST_FAILED";

export const PUSH_DUMMY_CONTENT = "PUSH_DUMMY_CONTENT";

export const PUSH_DUMMY_REQUEST ='PUSH_DUMMY_REQUEST';

export const fetchAlarmRequest = (): any => ({
  type: FETCH_ALARM_REQUEST,
});

export const fetchAlarmPostsSuccess = (payload: any) => ({
  type: FETCH_ALARM_POST_SUCCESS,
  payload,
});

export const fetchAlarmPostsFaild = (payload: any) => ({
  type: FETCH_ALARM_POST_FAILED,
  payload,
});



export const pushDummyContent = (payload: any) => ({
    type: PUSH_DUMMY_CONTENT,
    payload,
  });


  export const pushDummyRequest = (): any => ({
    type: PUSH_DUMMY_REQUEST,
  });  
