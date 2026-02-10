import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {

  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>
          <p>₹ {Math.floor(item.price * 80)}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
