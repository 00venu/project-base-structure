import { FETCH_TODOS_SUCCEEDED } from "../actionTypes/list";
import { IListState } from "./types";
const initialState = {
list: [],
};
export type Action = { type: string; payload: string };
const ListReducer = (state: IListState = initialState, action: Action) => {
switch (action.type) {
case FETCH_TODOS_SUCCEEDED: {
return {
...state,
list: action.payload,
};
}
default:
return state;
}
};
export default ListReducer;