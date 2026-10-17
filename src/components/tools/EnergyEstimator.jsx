import React, { useState } from "react";
import "./Tool.css";

export default function EnergyEstimator() {
  const [appliance, setAppliance] = useState("");
  const [result, setResult] = useState("");

  const usage = {
    "LED Bulb": "Uses about 10 watts — extremely efficient.",
    "Laptop": "Uses around 50 watts per hour.",
    "Refrigerator": "Uses 150–300 watts continuously — one of the highest household energy users.",
    "Air Conditioner": "Uses 500–1500 watts depending on size.",
    "Phone Charger": "Uses only 5 watts — but unplug when not in use.",
  };

  const estimate = () => {
    if (!appliance) {
      setResult("Select an appliance.");
      return;
    }
    setResult(usage[appliance]);
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Energy Estimator</h3>

      <select
        className="tool-select"
        value={appliance}
        onChange={(e) => setAppliance(e.target.value)}
      >
        <option value="">Select an appliance</option>
        {Object.keys(usage).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <button className="tool-btn" onClick={estimate}>
        Estimate Energy Use
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
