import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";
import products from "./data/products";
import "./App.css";

function App() {

  const [page, setPage] = useState("products");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div>

      <Navbar setPage={setPage} />

      {page === "products" && (
        <ProductList
          products={products}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
        />
      )}

      {page === "cart" && <Cart cart={cart} />}

      {page === "wishlist" && <Wishlist wishlist={wishlist} />}

      {page === "profile" && <Profile />}

    </div>
  );
}

export default App;