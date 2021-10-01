import { Dispatch } from "react";
import axios, { AxiosResponse } from "axios";
import {
  ACCESS_CONTROL_ALLOW_ORIGIN_STAR,
  CONTENT_TYPE_APPLICATION_JSON,
} from "../../utils/constants";
import { API_TODOS_URL } from "../../utils/config";

export const LIST_TODO: string = "LIST_TODO";

export const listTodo = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response: AxiosResponse<any> = await axios({
        url: `${API_TODOS_URL}/todos`,
        method: "GET",
        headers: {
          "Content-Type": CONTENT_TYPE_APPLICATION_JSON,
          "Access-Control-Allow-Origin": ACCESS_CONTROL_ALLOW_ORIGIN_STAR,
        },
      });
      dispatch({ type: LIST_TODO, payload: response.data });
    } catch (err: any) {
      return err;
    }
  };
};
