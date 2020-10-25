import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};

export default Footer;
