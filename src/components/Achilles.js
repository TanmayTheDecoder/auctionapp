import React from "react";
import HOC from "./HOC";

function Achilles({ amount, handleIncrement }) {
  return (
    <>
      <h1>Achilles is spent {amount} €</h1>
      <button onClick={handleIncrement}>Increase Amount</button>
    </>
  );
}

export default HOC(Achilles);
