import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import styles from "./Produto.module.css";

const Produto = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError("Ocorreu um erro");
      } finally {
        setLoading(false);
      }
    })();
  }, [params]);

  if (error) return <p>{error}</p>;
  if (loading) return <div className="loading"></div>;

  return (
    <section className={`${styles.produto} animeLeft`}>
      {product && (
        <>
          <Helmet>
            <title>Rivanildo | {product && product.nome}</title>
          </Helmet>
          <div>
            {product.fotos.map((photo) => (
              <img key={photo.src} src={photo.src} alt={photo.titulo} />
            ))}
          </div>
          <div>
            <h1>{product.nome}</h1>
            <span className={styles.preco}>R$ {product.preco}</span>
            <p className={styles.descricao}>{product.descricao}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Produto;
