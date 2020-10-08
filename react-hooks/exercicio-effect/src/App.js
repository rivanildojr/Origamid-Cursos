import React, { useState, useEffect } from "react";
import Product from "./Product";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

function App() {
  const [product, setProduct] = useState(null);

  async function fetchAPI(nameProduct) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${nameProduct}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  }

  async function handleClick(event) {
    const nameProduct = event.target.innerText;
    const data = await fetchAPI(nameProduct);
    localStorage.setItem("produto", `${nameProduct}`);
    setProduct(data);
  }

  useEffect(() => {
    const nameProduct = localStorage.getItem("produto");
    (async function productAPI() {
      if (nameProduct) {
        const data = await fetchAPI(nameProduct);
        setProduct(data);
      }
    })();
  }, []);

  return (
    <section>
      <h1>Preferência: {product && product.nome}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {product && <Product product={product} />}
    </section>
  );
}

export default App;
