import React from "react";
import { useCart } from "../Context/CartContext";
import "../components/CSS/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

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
              <p>MK{item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, e.target.value)}
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: MK{totalPrice}</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
