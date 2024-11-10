import React from "react";
import "./style/CakeCard";

function CakeCard({ cake, onAddToCart }) {
  return (
    <div className="cake-card">
      <img src={cake.image} alt={cake.name} className="cake-image" />
      <h3 className="cake-name">{cake.name}</h3>
      <p className="cake-description">{cake.description}</p>
      <p className="cake-price">${cake.price}</p>
      <button className="add-to-cart-btn" onClick={() => onAddToCart(cake)}>
        Add to Cart
      </button>
    </div>
  );
}

export default CakeCard;