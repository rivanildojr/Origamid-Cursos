import React, { useState } from "react";
import Product from "./Product";

function App() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(product) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${product}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  }

  return (
    <div className="App">
      <button onClick={() => handleClick("tablet")}>Tablet</button>
      <button onClick={() => handleClick("smartphone")}>Smartphone</button>
      <button onClick={() => handleClick("notebook")}>Notebook</button>
      {loading && <p>Carregando...</p>}
      {!loading && product && <Product product={product} />}
    </div>
  );
}

export default App;
