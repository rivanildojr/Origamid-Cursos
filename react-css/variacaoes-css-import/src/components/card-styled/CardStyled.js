import React from "react";
import { Card, Image, CardContent, Title, Description, Button } from "./style";
import image from "../../assets/dog.svg";

const CardStyled = ({ title, description }) => {
  return (
    <Card>
      <Image src={image} alt="Imagem de uma cachorro" />
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button>Cadastro</Button>
      </CardContent>
    </Card>
  );
};

export default CardStyled;
