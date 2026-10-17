import React from "react";
import "./VarietyGrid.css";

export default function VarietyGrid({ title, items, onDetails }) {
  return (
    <div className="variety-page">
      <h1 className="variety-title">{title}</h1>

      <div className="variety-grid">
        {items.map((item) => (
          <div key={item.id} className="variety-card">
            <img src={item.image} alt={item.name} className="variety-img" />

            <h2 className="variety-name">{item.name}</h2>

            <button
              className="variety-btn"
              onClick={() => onDetails(item)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
