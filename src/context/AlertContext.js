import React, { createContext, useReducer } from "react";
import AlertReducer from "../reducers/AlertReducer";
const defaultState = [];

export const AlertContext = createContext(defaultState);
export const AlertContextDispatch = createContext(defaultState);
const initialState = [];
export default function AlertContextProvider({ children }) {
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  return (
    <AlertContext.Provider
      value={{
        state,
      }}
    >
      <AlertContextDispatch.Provider
        value={{
          dispatch,
        }}
      >
        {children}
      </AlertContextDispatch.Provider>
    </AlertContext.Provider>
  );
}
