import React, { useState, useEffect } from "react";
import "./CheckoutModal.css";

export default function CheckoutModal({ cartItems, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Mock admin-editable data (replace with Firebase later)
  const [pickupDates, setPickupDates] = useState([]);
  const [pickupLocations, setPickupLocations] = useState([]);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [submitted, setSubmitted] = useState(false);

  // Load mock data
  useEffect(() => {
    setPickupDates([
      "July 10, 2026",
      "July 12, 2026",
      "July 15, 2026",
    ]);

    setPickupLocations([
      "City Greens Farmstand – Beverly Hills",
      "Beverly Hills Farmers Market",
    ]);
  }, []);

  function placeOrder() {
    if (!name || !email || !selectedDate || !selectedLocation) return;

    // Later: send to Firebase
    console.log("Order placed:", {
      name,
      email,
      selectedDate,
      selectedLocation,
      cartItems,
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="checkout-modal-backdrop">
        <div className="checkout-modal">
          <h2>Your order has been placed!</h2>
          <p>
            Pickup and pay at <strong>{selectedLocation}</strong>
          </p>

          <button className="checkout-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-modal-backdrop">
      <div className="checkout-modal">
        <h2>Checkout</h2>

        <label>Name</label>
        <input
          className="checkout-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          className="checkout-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Pickup Date</label>
        <select
          className="checkout-input"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value="">Select a date</option>
          {pickupDates.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <label>Pickup Location</label>
        <select
          className="checkout-input"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Select a location</option>
          {pickupLocations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

        <button className="checkout-submit-btn" onClick={placeOrder}>
          Place Preorder
        </button>

        <button className="checkout-close-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
