import React from "react";

const Product = ({ product }) => {
  return (
    <section>
      <h2>{product.nome}</h2>
      <p>Descrição: {product.descricao}</p>
      <p>Preço: R$ {product.preco}</p>
      <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
    </section>
  );
};

export default Product;
