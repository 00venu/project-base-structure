import {
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCEEDED,
  FETCH_TODOS_FAILED
} from "../../store/actionTypes/list";
export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface ListKeys {
  title: any;
  thumbnail: any;
}
export interface RootState {
  list: any;
}
export interface TodosState {
  pending: boolean;
  todos: ITodo[];
  error: string | null;
}
export interface FetchTodosSuccessPayload {
  todos: ITodo[];
}
export interface FetchTodosFailurePayload {
  error: string;
}
export interface FetchTodosRequest {
  type: typeof FETCH_TODOS_REQUESTED;
}
export type FetchTodosSuccess = {
  type: typeof FETCH_TODOS_SUCCEEDED;
  payload: FetchTodosSuccessPayload;
};
export type FetchTodosFailure = {
  type: typeof FETCH_TODOS_FAILED;
  payload: FetchTodosFailurePayload;
};
export type TodosActions =
  | FetchTodosRequest
  | FetchTodosSuccess
  | FetchTodosFailure;