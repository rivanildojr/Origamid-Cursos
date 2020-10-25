import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkStyle = {
    color: "green",
  };

  return (
    <nav>
      <NavLink to="/" end activeStyle={linkStyle}>
        Home
      </NavLink>
      <NavLink to="sobre" activeStyle={linkStyle}>
        Sobre
      </NavLink>
      <NavLink to="contato" activeStyle={linkStyle}>
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
