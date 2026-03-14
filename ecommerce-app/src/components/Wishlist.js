import React from "react";

function Wishlist({ wishlist }) {

  return (
    <div>

      <h2>Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
        </div>
      ))}

    </div>
  );
}

export default Wishlist;