import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Photo from "./pages/Photo";
import Profile from "./pages/Profile";

import ProtectedRoute from "./utils/ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <ProtectedRoute path="conta/*" element={<User />} />
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:id" element={<Profile />} />
    </Routes>
  );
};

export default Router;
