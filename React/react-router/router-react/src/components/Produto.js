import React from "react";

import { Outlet, useParams, NavLink } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h2>Pagina de Produto</h2>
      <p>id: {params.id}</p>

      <Outlet />

      <NavLink to="">Descrição</NavLink>
      <NavLink to="customizado">Customizado</NavLink>
    </div>
  );
};

export default Produto;
