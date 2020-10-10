import React, { lazy, Suspense, useState } from "react";
import Produto from "./components/Produto";
import Header from "./components/Header";
import Contador from "./components/Contador";
import Footer from "./components/Footer";

const Contato = lazy(() => import("./components/Contato"));

function App() {
  const [activate, setActivate] = useState(false);

  return (
    <>
      <h2>Memo</h2>
      <Header />
      <h2>PropTypes</h2>
      <Produto
        title="Livro de Clean Code"
        description="Livro com base importante para o desenvolvimento de software"
      />
      <h2>Lazy e Suspense</h2>
      {activate && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </Suspense>
      )}
      <button onClick={() => setActivate(!activate)}>Ativar</button>

      <h2>UseReducer</h2>
      <Contador />

      <h2>Classes</h2>
      <Footer />
    </>
  );
}

export default App;
