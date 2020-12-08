import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "../reducers/AuthReducer";
import { isBrowser } from "../helpers/helper";
import { LOGIN_SUCCESS } from "../actions/types";
const defaultState = [];

export const AuthContext = createContext(defaultState);
export const AuthContextDispatch = createContext(defaultState);
const initialState = {
  isAuthenticated: false,
  loading: true,
  token: null,
  user: null,
};
export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    const token = (isBrowser() && window.localStorage.getItem("token")) || null;
    const user =
      (isBrowser() && JSON.parse(window.localStorage.getItem("user"))) || null;
    if (token && user) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        state,
      }}
    >
      <AuthContextDispatch.Provider
        value={{
          dispatch,
        }}
      >
        {children}
      </AuthContextDispatch.Provider>
    </AuthContext.Provider>
  );
}
