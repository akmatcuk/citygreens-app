import React, { useState } from "react";
import "./Tool.css";

export default function SunlightTool() {
  const [plant, setPlant] = useState("");
  const [result, setResult] = useState("");

  const sunlight = {
    Lettuce: "Partial sun (4–6 hours). Prefers cooler conditions.",
    Tomatoes: "Full sun (6–8 hours). Needs strong light to fruit.",
    Basil: "Full sun (6+ hours). Thrives in warm, bright areas.",
    Peppers: "Full sun (6–8 hours). Needs warmth and consistent light.",
    Cucumbers: "Full sun (6–8 hours). Can tolerate partial shade.",
  };

  const handleCheck = () => {
    if (sunlight[plant]) {
      setResult(sunlight[plant]);
    } else {
      setResult("Select a plant to see its sunlight needs.");
    }
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Sunlight Needs Checker</h3>

      <select
        className="tool-select"
        value={plant}
        onChange={(e) => setPlant(e.target.value)}
      >
        <option value="">Select a plant</option>
        <option value="Lettuce">Lettuce</option>
        <option value="Tomatoes">Tomatoes</option>
        <option value="Basil">Basil</option>
        <option value="Peppers">Peppers</option>
        <option value="Cucumbers">Cucumbers</option>
      </select>

      <button className="tool-btn" onClick={handleCheck}>
        Check Sunlight
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
