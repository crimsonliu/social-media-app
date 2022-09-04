import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

function AuthRoute({ element: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) => (user ? navigate("/") : <Component {...props} />)}
    />
  );
}

export default AuthRoute;
