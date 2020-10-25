import React, { useReducer } from "react";

import reducer from "../reducers/contadorReducer";

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "remove" })}>-</button>
      <p>{state}</p>
    </div>
  );
};

export default Contador;
