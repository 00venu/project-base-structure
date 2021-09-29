import { LIST_TODO } from "../actions/listActions";
import { ListState } from "./interface/interface";

const initialState = {
  list: [],
};

export type Action = { type: "LIST_TODO"; payload: string };

const ListReducer = (state: ListState = initialState, action: Action) => {
  switch (action.type) {
    case "LIST_TODO": {
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
