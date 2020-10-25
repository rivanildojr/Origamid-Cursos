import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
