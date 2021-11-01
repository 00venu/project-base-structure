export const ROUTING_TEST_REQUEST = "ROUTING_TEST_REQUEST";

export const ROUTING_TEST_SUCCESS = "ROUTING_TEST_SUCCESS";

export const fetchRoutingRequest = (
  orders: any,
  depots: any,
  routes: any
): any => ({
  type: ROUTING_TEST_REQUEST,
  payload: { orders, depots, routes },
});

export const fetchAlarmPostsSuccess = (payload: any) => ({
  type: ROUTING_TEST_SUCCESS,
  payload,
});
