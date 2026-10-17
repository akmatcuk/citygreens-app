import React, { useState } from "react";
import "./Tool.css";

export default function MoistureTool() {
  const [level, setLevel] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    if (level === "Dry") {
      setResult("Add water and more greens to increase moisture.");
    } else if (level === "Perfect") {
      setResult("Your compost moisture is ideal!");
    } else if (level === "Wet") {
      setResult("Add browns (leaves, cardboard) to absorb moisture.");
    } else {
      setResult("Select a moisture level.");
    }
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Compost Moisture Checker</h3>

      <select
        className="tool-select"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="">Select moisture level</option>
        <option value="Dry">Dry</option>
        <option value="Perfect">Perfect</option>
        <option value="Wet">Wet</option>
      </select>

      <button className="tool-btn" onClick={handleCheck}>
        Check Moisture
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
