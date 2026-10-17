import React, { useState } from "react";
import "./Tool.css";

export default function PHHelper() {
  const [ph, setPh] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    if (!ph) {
      setResult("Enter a pH value.");
      return;
    }

    const value = parseFloat(ph);

    if (value < 5.5) {
      setResult("Your pH is too low. Add pH UP to increase it.");
    } else if (value > 6.5) {
      setResult("Your pH is too high. Add pH DOWN to decrease it.");
    } else {
      setResult("Perfect! Your pH is in the ideal hydroponic range (5.5–6.5).");
    }
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">pH Adjustment Helper</h3>

      <input
        className="tool-select"
        type="number"
        step="0.1"
        placeholder="Enter current pH"
        value={ph}
        onChange={(e) => setPh(e.target.value)}
      />

      <button className="tool-btn" onClick={handleCheck}>
        Check pH
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
