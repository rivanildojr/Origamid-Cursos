import React from "react";
import image from "../../assets/foto.jpg";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardFrameworkReact = ({ title, description }) => {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "14rem", width: "16rem" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Cadastro</Button>
      </Card.Body>
    </Card>
  );
};

export default CardFrameworkReact;
