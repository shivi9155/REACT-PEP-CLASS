import { use, useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  const [count,setCount] = useState(0);


  return (
    <div>
      <h2>Cart Items</h2>
      <p>Items in Cart: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count=0)}>Reset</button>
   

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
            <p>{item*count}</p>

          </div>

        ))
      )}
    </div>
  );
}

export default Cart;
