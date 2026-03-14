import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, addToCart, addToWishlist }) {

  return (
    <div>

      <h2>Products</h2>

      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
        />
      ))}

    </div>
  );
}

export default ProductList;