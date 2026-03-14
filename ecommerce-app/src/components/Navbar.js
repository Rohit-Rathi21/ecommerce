import React from "react";

function Navbar({ setPage }) {

  return (
    <div className="navbar">

      <button onClick={() => setPage("products")}>
        Products
      </button>

      <button onClick={() => setPage("cart")}>
        Cart
      </button>

      <button onClick={() => setPage("wishlist")}>
        Wishlist
      </button>

      <button onClick={() => setPage("profile")}>
        Profile
      </button>

    </div>
  );
}

export default Navbar;