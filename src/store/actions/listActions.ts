import { FetchTodosSuccessPayload, FetchTodosSuccess, FetchTodosRequest } from "../../components/list/types";
import {
FETCH_TODOS_REQUESTED,
FETCH_TODOS_SUCCEEDED,
FETCH_TODOS_FAILED
} from "../actionTypes/list";
export const fetchPostsRequest = (): FetchTodosRequest => ({
type: FETCH_TODOS_REQUESTED
});
export const fetchPostsSuccess = (
payload: FetchTodosSuccessPayload
): FetchTodosSuccess => ({
type: FETCH_TODOS_SUCCEEDED,
payload
});
