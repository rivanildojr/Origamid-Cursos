import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search);
    console.log(search.get("category"));
  }, [location]);

  return <div>Pagina de Contato</div>;
};

export default Contact;
