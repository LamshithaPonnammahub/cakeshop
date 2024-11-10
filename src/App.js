import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Cart from "./pages/cart";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false); 

  const addToCart = (cake) => {
    setCartItems((prev) => [...prev, cake]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen); // Toggle cart open state
  };

  return (
    <div className="app">
      <header>
        <h1>Cake Heaven</h1>
        <p>Delight in Every Slice</p>
        <button className="cart-toggle-btn" onClick={toggleCart}>
          Cart ({cartItems.length})
        </button>
      </header>
      <main>
        <HomePage onAddToCart={addToCart} cartItemCount={cartItems.length} />
      </main>
      <Cart 
        cartItems={cartItems} 
        onRemoveFromCart={removeFromCart} 
        isOpen={isCartOpen} 
        onClose={() => setCartOpen(false)} 
      />
      <Footer />
    </div>
  );
}

export default App;