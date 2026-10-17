import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./cart.css";
import CheckoutModal from "../../components/CheckoutModal";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="cart-info">
                <h2 className="cart-name">{item.name}</h2>
                <p className="cart-price">${item.price}</p>

                <div className="cart-qty">
                  <button onClick={() => updateQty(item.id, item.qty - 1)}>
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}>
                    +
                  </button>
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h2>Total: ${total.toFixed(2)}</h2>

          <button
            className="cart-checkout"
            onClick={() => setCheckoutOpen(true)}
          >
            Checkout
          </button>
        </div>
      )}

      {checkoutOpen && (
        <CheckoutModal
          cartItems={cart}
          onClose={() => setCheckoutOpen(false)}
        />
      )}
    </div>
  );
}
