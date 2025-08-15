import React, { useState } from "react";
import "../components/CSS/Cart.css";

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Farm Basins", price: 500, quantity: 1 },
    { id: 2, name: "Paper Plate", price: 50, quantity: 2 },
    { id: 2, name: "Travel Cup", price: 10, quantity: 4 },
    { id: 2, name: "Surgical Basin", price: 350, quantity: 2 },
    { id: 2, name: "Laboratory Basin", price: 300, quantity: 2 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

 
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, e.target.value)}
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: ${totalPrice}</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
