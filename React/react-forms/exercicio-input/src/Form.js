import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [response, setResponse] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = {
      nome: name,
      email,
      senha: password,
      cep: zipcode,
      rua: street,
      numero: number,
      bairro: neighborhood,
      cidade: city,
      estado: state,
    };

    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/usuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // form é o objeto com os dados do formulário
        body: JSON.stringify(form),
      }
    );

    if (response.ok) setResponse(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nome"
        type="text"
        id="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <Input
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <Input
        label="Senha"
        type="password"
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <Input
        label="Cep"
        type="text"
        id="zipcode"
        value={zipcode}
        onChange={({ target }) => setZipcode(target.value)}
      />

      <Input
        label="Rua"
        type="text"
        id="street"
        value={street}
        onChange={({ target }) => setStreet(target.value)}
      />

      <Input
        label="Numero"
        type="text"
        id="number"
        value={number}
        onChange={({ target }) => setNumber(target.value)}
      />

      <Input
        label="Bairro"
        type="text"
        id="neighborhood"
        value={neighborhood}
        onChange={({ target }) => setNeighborhood(target.value)}
      />

      <Input
        label="Cidade"
        type="text"
        id="city"
        value={city}
        onChange={({ target }) => setCity(target.value)}
      />

      <Input
        label="Estado"
        type="text"
        id="state"
        value={state}
        onChange={({ target }) => setState(target.value)}
      />
      {response && <p>Formulário Enviado!</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Form;
