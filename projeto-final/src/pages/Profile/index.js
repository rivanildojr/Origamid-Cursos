import React from "react";
import { useParams } from "react-router-dom";

import Feed from "../../components/Feed";

const Profile = () => {
  const { id } = useParams();

  return (
    <section className="container mainContainer">
      <h1 className="title">{id}</h1>
      <Feed user={id} />
    </section>
  );
};

export default Profile;
