import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Contato.module.css";

import photo from "../../assets/contato.jpg";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Helmet>
        <title>Rivanildo | Contato</title>
      </Helmet>
      <img src={photo} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>rivas.santos27@gmail.com</li>
          <li>99898-9898</li>
          <li>Rua dos bobos</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
