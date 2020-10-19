import React, { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../service/api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);

    const responseUser = await fetch(url, options);
    const data = await responseUser.json();
    setUser(data);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = useCallback(async () => {
    setUser(null);
    setLogin(null);
    setError(null);
    setLoading(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    (async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setLoading(true);
          setError(null);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    })();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, user, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
