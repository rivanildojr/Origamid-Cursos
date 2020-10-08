import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const { products } = useContext(GlobalContext);
  return (
    <section>
      {products &&
        products.map((product) => (
          <article key={product.id}>
            <h2>{product.nome}</h2>
            <p>Descrição: {product.descricao}</p>
            <p>Preço: R$ {product.preco}</p>
            <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          </article>
        ))}
    </section>
  );
};

export default Product;
