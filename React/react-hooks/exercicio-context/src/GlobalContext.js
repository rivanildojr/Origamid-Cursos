import React, { useEffect, createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function clearData() {
    setProducts(null);
  }

  return (
    <GlobalContext.Provider value={{ products, clearData }}>
      {children}
    </GlobalContext.Provider>
  );
};
