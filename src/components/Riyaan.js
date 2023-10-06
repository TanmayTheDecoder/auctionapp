import React from "react";
import HOC from "./HOC";

function Riyaan({ amount, handleIncrement}) {
  return (
    <>
      <h1>Riyaan is spent {amount} €</h1>
      <button onClick={handleIncrement}>Increase Amount</button>
    </>
  );
}

export default HOC(Riyaan);
