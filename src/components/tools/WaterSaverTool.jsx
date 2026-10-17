import React, { useState } from "react";
import "./Tool.css";

export default function WaterSaverTool() {
  const [habit, setHabit] = useState("");
  const [result, setResult] = useState("");

  const savings = {
    "Fix Leaks": "Fixing household leaks can save up to 3,000 gallons per year.",
    "Shorter Showers": "Reducing showers by 2 minutes saves about 1,500 gallons annually.",
    "Efficient Appliances": "Using water‑efficient appliances can save 20–30% of household water use.",
    "Full Laundry Loads": "Running full loads saves around 700 gallons per year.",
  };

  const calculate = () => {
    if (!habit) {
      setResult("Select a water‑saving habit.");
      return;
    }
    setResult(savings[habit]);
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Water Saver Tool</h3>

      <select
        className="tool-select"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      >
        <option value="">Select a habit</option>
        {Object.keys(savings).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <button className="tool-btn" onClick={calculate}>
        Calculate Savings
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
