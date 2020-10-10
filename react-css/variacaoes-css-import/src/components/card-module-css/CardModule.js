import React from "react";
import style from "./style.module.css";
import image from "../../assets/foto.jpg";

const CardModule = ({ title, description }) => {
  return (
    <article className={style.container}>
      <img src={image} alt="Imagem de uma cachorro" className={style.image} />
      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <button className={style.button}>Cadastro</button>
      </div>
    </article>
  );
};

export default CardModule;
