import React, { useState } from "react";
import "./Tool.css";

export default function NutrientMixTool() {
  const [gallons, setGallons] = useState("");
  const [result, setResult] = useState("");

  const handleCalc = () => {
    if (!gallons) {
      setResult("Enter reservoir size.");
      return;
    }

    const g = Number(gallons);

    const nutrientA = (g * 5).toFixed(1); // 5 ml per gallon
    const nutrientB = (g * 5).toFixed(1); // 5 ml per gallon

    setResult(
      `For ${g} gallons: Add ${nutrientA} ml of Nutrient A and ${nutrientB} ml of Nutrient B.`
    );
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Nutrient Mix Calculator</h3>

      <input
        className="tool-select"
        type="number"
        placeholder="Reservoir size (gallons)"
        value={gallons}
        onChange={(e) => setGallons(e.target.value)}
      />

      <button className="tool-btn" onClick={handleCalc}>
        Calculate Mix
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
