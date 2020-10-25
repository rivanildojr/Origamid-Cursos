import React from "react";
import { useParams } from "react-router-dom";

import Feed from "../../components/Feed";

import Head from "../../utils/Head";

const Profile = () => {
  const { id } = useParams();

  return (
    <section className="container mainContainer">
      <Head title={id} description="Profile dos usuarios do site dogs" />
      <h1 className="title">{id}</h1>
      <Feed user={id} />
    </section>
  );
};

export default Profile;
