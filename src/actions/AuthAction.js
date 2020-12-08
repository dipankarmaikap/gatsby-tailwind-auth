import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from "./types";
import { backendUrl, config } from "../helpers/helper";
export const login = async (username, password, dispatch) => {
  try {
    const res = await axios.post(`${backendUrl}/login`, {
      email: username,
      password,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};
export const logout = async (dispatch) => {
  try {
    await axios.post(`${backendUrl}/users/logout`, {}, config());
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILED,
    });
  }
};
