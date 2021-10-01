import { LIST_TODO } from "../actions/listActions";
import { ListState } from "./interface";

const initialState = {
  list: [],
};

export type Action = { type: string; payload: string };

const ListReducer = (state: ListState = initialState, action: Action) => {
  switch (action.type) {
    case LIST_TODO: {
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
