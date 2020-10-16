import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Produto from "./components/Produto";
import ProductDescription from "./components/ProductDescription";
import ProductCustomized from "./components/ProductCustomized";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contact />} />
        <Route path="sobre" element={<About />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProductDescription />} />
          <Route path="customizado" element={<ProductCustomized />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
