import React from "react";
import cakes from "./cake";
import CakeCard from "./CakeCard";
import "./HomePage.css";

function HomePage({ onAddToCart }) {
  return (
    <div className="home-page">
      <h1>Welcome to Cake Heaven</h1>
      <p className="intro-text">
      Discover our delicious selection of cakes, crafted with love and the finest ingredients. Perfect for every occasion!
      </p>
      <div className="cake-list">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;