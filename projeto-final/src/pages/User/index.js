import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./User.module.css";

import UserHeader from "../../components/UserHeader";
import Feed from "../../components/Feed";
import UserPhotoPost from "../../components/UserPhotoPost";
import UserStats from "../../components/UserStats";

import { UserContext } from "../../Context/UserContext";

const User = () => {
  const { user } = useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={user.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
