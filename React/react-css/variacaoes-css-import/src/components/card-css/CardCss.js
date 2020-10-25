import React from "react";
import "./style.css";
import image from "../../assets/foto.jpg";

const CardCss = ({ title, description }) => {
  return (
    <article className="CardCss-container">
      <img src={image} alt="Imagem de uma cachorro" className="CardCss-image" />
      <div className="CardCss-content">
        <h3 className="CardCss-title">{title}</h3>
        <p className="CardCss-description">{description}</p>
        <button className="CardCss-button">Cadastro</button>
      </div>
    </article>
  );
};

export default CardCss;
