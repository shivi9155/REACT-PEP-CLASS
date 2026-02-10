import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";

const ProductList = () => {

  const [products, setProducts] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))   
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>₹{Math.floor(item.price * 80)}</p>

          <button onClick={() => addToCart(item)}>
            Add To Cart
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
