import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "../../components/LoginForm";
import LoginCreate from "../../components/LoginCreate";
import LoginPasswordLost from "../../components/LoginPasswordLost";
import LoginPasswordReset from "../../components/LoginPasswordReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
