import React, { useState } from 'react'

function HOC(OriginalComponent) {
  function NewComponent() {
    const [amount, setAmount] = useState(100);
    function handleIncrement () {
        setAmount(amount * 2);
    }
    return <OriginalComponent amount= {amount} handleIncrement = {handleIncrement}/> 
  }
  return NewComponent;
}

export default HOC
