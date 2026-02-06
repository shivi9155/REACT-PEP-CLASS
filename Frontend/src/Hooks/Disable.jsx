import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        Decrement Count
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <hr />

      <h2>Quantity: {quantity}</h2>
      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity === 1}
      >
        Decrement Quantity
      </button>
      <button onClick={() => setQuantity(quantity + 1)}>
        Increment Quantity
      </button>
    </div>
  );
}

export default App;
