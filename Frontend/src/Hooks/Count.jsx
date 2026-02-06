import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  // Derived value
  const type = count % 2 === 0 ? "EVEN" : "ODD";

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Type: {type}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Count;
