import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";

import { UserContext } from "../../Context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {user ? (
          <Link className={styles.login} to="/conta">
            {user.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
