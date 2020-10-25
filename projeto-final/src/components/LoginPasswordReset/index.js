import React, { useEffect, useState } from "react";

import Input from "../Input";
import Button from "../Button";
import Error from "../../utils/Error";
import Head from "../../utils/Head";

import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";

import { PASSWORD_RESET } from "../../service/api";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");

  const password = useForm();

  const { loading, error, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramsKey = params.get("key");
    const paramsLogin = params.get("login");
    if (paramsKey) setKey(paramsKey);
    if (paramsLogin) setLogin(paramsLogin);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resetar a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
