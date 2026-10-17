import React, { useState } from "react";
import "./Tool.css";

export default function WasteAuditTool() {
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, { category, item: input }]);
    setInput("");
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Waste Audit Tool</h3>

      <select
        className="tool-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select waste category</option>
        <option value="Food Waste">Food Waste</option>
        <option value="Plastic">Plastic</option>
        <option value="Paper">Paper</option>
        <option value="Glass">Glass</option>
        <option value="Other">Other</option>
      </select>

      <input
        className="tool-select"
        type="text"
        placeholder="Add an item (e.g., plastic wrapper)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="tool-btn" onClick={addItem}>
        Add Item
      </button>

      {items.length > 0 && (
        <div className="tool-result">
          <h4>Your Waste Log:</h4>
          <ul>
            {items.map((entry, index) => (
              <li key={index}>
                <strong>{entry.category}:</strong> {entry.item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
