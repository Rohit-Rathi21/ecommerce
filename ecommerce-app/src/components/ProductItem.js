import React from "react";

function ProductItem({ product, addToCart, addToWishlist }) {

  return (
    <div className="product">

      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <button onClick={() => addToWishlist(product)}>
        Wishlist
      </button>

    </div>
  );
}

export default ProductItem;