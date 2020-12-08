import React from "react";
import AuthContextProvider from "./src/context/AuthContext";
import AlertContextProvider from "./src/context/AlertContext";

export const wrapRootElement = ({ element }) => (
  <AuthContextProvider>
    <AlertContextProvider>{element}</AlertContextProvider>
  </AuthContextProvider>
);
