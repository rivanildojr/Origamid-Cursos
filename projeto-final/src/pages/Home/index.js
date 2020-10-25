import React from "react";

import Feed from "../../components/Feed";

import Head from "../../utils/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos"
      />
      <Feed />
    </section>
  );
};

export default Home;
