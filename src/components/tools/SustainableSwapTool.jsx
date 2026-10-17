import React, { useState } from "react";
import "./Tool.css";

export default function SustainableSwapTool() {
  const [item, setItem] = useState("");
  const [swap, setSwap] = useState("");

  const swaps = {
    "Plastic Water Bottle": "Swap for a reusable stainless steel or glass bottle.",
    "Plastic Bags": "Swap for cloth or canvas shopping bags.",
    "Paper Towels": "Swap for washable cloth towels.",
    "Plastic Toothbrush": "Swap for a bamboo toothbrush.",
    "Disposable Containers": "Swap for glass or stainless steel containers.",
    "Single‑Use Coffee Cups": "Swap for a reusable insulated mug.",
  };

  const generateSwap = () => {
    if (!item) {
      setSwap("Select an item to find a sustainable swap.");
      return;
    }
    setSwap(swaps[item]);
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Sustainable Swap Tool</h3>

      <select
        className="tool-select"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      >
        <option value="">Select an item</option>
        {Object.keys(swaps).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <button className="tool-btn" onClick={generateSwap}>
        Show Sustainable Swap
      </button>

      {swap && <p className="tool-result">{swap}</p>}
    </div>
  );
}
