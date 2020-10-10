import styled from "styled-components";

export const Card = styled.article`
  width: 250px;
  max-height: 400px;
  border: 1px solid #ccc;
`;

export const Image = styled.img`
  width: 250px;
  height: 200px;
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const Title = styled.h3`
  font-size: 20px;
`;

export const Description = styled.p`
  font-size: 15px;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #0069d9;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  &:hover {
    background-color: #007bff;
  }
`;
