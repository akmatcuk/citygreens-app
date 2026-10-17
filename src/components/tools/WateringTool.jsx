import React, { useState } from "react";
import "./Tool.css";

export default function WateringTool() {
  const [plant, setPlant] = useState("");
  const [result, setResult] = useState("");

  const schedules = {
    Lettuce: "Water lightly every 1–2 days. Keep soil consistently moist.",
    Tomatoes: "Deep watering every 2–3 days. Avoid wetting leaves.",
    Basil: "Water every 2 days. Basil prefers evenly moist soil.",
    Peppers: "Water every 3 days. Let the top inch of soil dry out.",
    Cucumbers: "Water daily in hot weather; every 2 days otherwise.",
  };

  const handleCheck = () => {
    if (schedules[plant]) {
      setResult(schedules[plant]);
    } else {
      setResult("Select a plant to see its watering schedule.");
    }
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Watering Schedule Generator</h3>

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
        Get Schedule
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
