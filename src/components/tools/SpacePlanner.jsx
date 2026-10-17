import React, { useState } from "react";
import "./Tool.css";

export default function SpacePlanner() {
  const [size, setSize] = useState("");
  const [result, setResult] = useState("");

  const handlePlan = () => {
    if (!size) {
      setResult("Select your available space.");
      return;
    }

    if (size === "Windowsill") {
      setResult(
        "Perfect for herbs (basil, mint, chives), microgreens, and small leafy greens."
      );
    } else if (size === "Balcony") {
      setResult(
        "Great for tomatoes, peppers, lettuce, herbs, strawberries, and compact containers."
      );
    } else if (size === "Patio") {
      setResult(
        "You can grow larger crops like cucumbers, beans, dwarf fruit trees, and root vegetables."
      );
    } else if (size === "Indoor Corner") {
      setResult(
        "Ideal for LED‑grown greens, microgreens, herbs, and small hydroponic setups."
      );
    }
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Space Planner</h3>

      <select
        className="tool-select"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="">Select your space</option>
        <option value="Windowsill">Windowsill</option>
        <option value="Balcony">Balcony</option>
        <option value="Patio">Patio</option>
        <option value="Indoor Corner">Indoor Corner</option>
      </select>

      <button className="tool-btn" onClick={handlePlan}>
        Plan Space
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
