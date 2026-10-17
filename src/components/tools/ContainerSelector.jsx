import React, { useState } from "react";
import "./Tool.css";

export default function ContainerSelector() {
  const [plant, setPlant] = useState("");
  const [result, setResult] = useState("");

  const handleSelect = () => {
    if (!plant) {
      setResult("Select a plant type.");
      return;
    }

    const recommendations = {
      Herbs: "4–6 inch pots with good drainage.",
      Lettuce: "Shallow trays or 6–8 inch pots.",
      Tomatoes: "5‑gallon buckets or large grow bags.",
      Peppers: "3–5 gallon containers.",
      Microgreens: "Shallow trays (1–2 inches deep).",
      Strawberries: "Hanging baskets or 8–10 inch pots.",
    };

    setResult(recommendations[plant]);
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Container Selector</h3>

      <select
        className="tool-select"
        value={plant}
        onChange={(e) => setPlant(e.target.value)}
      >
        <option value="">Select a plant</option>
        <option value="Herbs">Herbs</option>
        <option value="Lettuce">Lettuce</option>
        <option value="Tomatoes">Tomatoes</option>
        <option value="Peppers">Peppers</option>
        <option value="Microgreens">Microgreens</option>
        <option value="Strawberries">Strawberries</option>
      </select>

      <button className="tool-btn" onClick={handleSelect}>
        Recommend Container
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
