import React from "react";
import image from "../../assets/dog.svg";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const CardFrameworks = ({ title, description }) => {
  return (
    <article className="card" style={{ maxWidth: "16rem" }}>
      <img src={image} alt="Imagem de uma cachorro" className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">Cadastro</button>
      </div>
    </article>
  );
};

export default CardFrameworks;
