import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./LoginForm.module.css";

import Input from "../Input";
import Button from "../Button";

import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    (async function () {
      if (username.validate() && password.validate()) {
        const response = await fetch(
          "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          }
        );

        const data = await response.json();
        console.log(data);
      }
    })();
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
