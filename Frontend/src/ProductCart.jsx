import { useState, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        // <div key={product.id}>
        //   <p>{product.title}</p>
        <div>
          <p>₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add To Cart
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
