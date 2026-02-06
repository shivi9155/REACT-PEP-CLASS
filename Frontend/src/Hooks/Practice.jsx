import React, { useState, useEffect } from "react";

function Practice() {
  const [quantity, setQuantity] = useState(0);
  const [count, setCount] = useState(0);

  // Rule: Reset count when quantity becomes 5
  useEffect(() => {
    if (quantity === 5) {
      setCount(0);
    }
  }, [quantity]); // dependency array

  return (
    <div>
      <h2>Quantity: {quantity}</h2>
      <h2>Count: {count}</h2>

      <button onClick={() => setQuantity(quantity + 1)}>
        Increase Quantity
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Practice;
