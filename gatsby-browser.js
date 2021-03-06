import React from "react";
import "./src/css/global.css";
import "./src/css/site.css";
import AuthContextProvider from "./src/context/AuthContext";
import AlertContextProvider from "./src/context/AlertContext";

export const wrapRootElement = ({ element }) => (
  <AuthContextProvider>
    <AlertContextProvider>{element}</AlertContextProvider>
  </AuthContextProvider>
);
