import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "../actions/types";
import { isBrowser } from "../helpers/helper";
export default function AuthReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      isBrowser() && window.localStorage.setItem("token", payload.token);
      isBrowser() &&
        window.localStorage.setItem("user", JSON.stringify(payload.user));
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAILED:
      isBrowser() && window.localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      isBrowser() && window.localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
}
