import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import styles from "./Home.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto",
        {
          method: "Get",
        }
      );
      const data = await response.json();
      console.log(data[0]);
      setProducts(data);
    })();
  }, []);

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Helmet>
        <title>Rivanildo</title>
      </Helmet>
      {products &&
        products.map((item) => {
          return (
            <Link to={`produto/${item.id}`} key={item.id}>
              <img src={item.fotos[0].src} alt={item.nome} />
              <h1 className={styles.nome}>{item.nome}</h1>
            </Link>
          );
        })}
    </section>
  );
};

export default Home;
