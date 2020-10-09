import React, { useState } from "react";

import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";
import useForm from "./hooks/useForm";

function App() {
  const [language, setLanguage] = useState([]);
  const [color, setColor] = useState("");
  const [payment, setPayment] = useState("");

  const name = useForm("nome");
  const zipcode = useForm("cep");
  const email = useForm("email");

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && zipcode.validate() && email.validate()) {
      console.log("Formulário Enviado");
    } else {
      console.log("Formulário não enviado");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkbox</h2>
      <Checkbox
        options={["JavaScript", "C", "Java", "Python"]}
        value={language}
        setValue={setLanguage}
      />

      <h2>Radio</h2>
      <Radio
        options={["verde", "vermelho", "branco"]}
        value={color}
        setValue={setColor}
      />

      <h2>Select</h2>
      <Select
        options={["A vista", "Prazo", "Boleto"]}
        value={payment}
        setValue={setPayment}
      />

      <h2>Input</h2>
      <Input
        label="Nome"
        id="name"
        type="text"
        placeholder="Digite seu Nome"
        {...name}
      />

      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Digite seu email"
        {...email}
      />

      <Input
        label="Cep"
        id="zipcode"
        type="text"
        placeholder="Digite seu cep (00000-000)"
        {...zipcode}
      />

      <h2>Checkbox</h2>
      <Checkbox
        options={["Termos de Uso"]}
        value={language}
        setValue={setLanguage}
      />

      <button>Enviar</button>
    </form>
  );
}

export default App;
