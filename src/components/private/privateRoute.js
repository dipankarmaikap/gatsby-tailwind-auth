import React, { useContext } from "react";
import { navigate } from "gatsby";
import { AuthContext } from "../../context/AuthContext";
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { state } = useContext(AuthContext);

  if (!state.isAuthenticated && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
