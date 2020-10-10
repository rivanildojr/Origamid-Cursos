import React from "react";
import PropTypes from "prop-types";

const Produto = ({ title, description, price }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Descrição: {description}</p>
      <p>RS: {price}</p>
    </div>
  );
};

Produto.defaultProps = {
  price: 0.0,
};

Produto.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Produto;
