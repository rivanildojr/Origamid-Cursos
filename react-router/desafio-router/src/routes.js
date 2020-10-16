import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contato from "./pages/Contato/Contato";
import Produto from "./pages/Produto/Produto";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="produto/:id" element={<Produto />} />
      <Route></Route>
    </Routes>
  );
};

export default Router;
