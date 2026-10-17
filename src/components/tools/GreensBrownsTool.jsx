import React, { useState } from "react";
import "./Tool.css";

export default function GreensBrownsTool() {
  const [greens, setGreens] = useState(0);
  const [browns, setBrowns] = useState(0);

  const ratio =
    greens && browns ? (browns / greens).toFixed(1) : null;

  return (
    <div className="tool-box">
      <h3 className="tool-title">Greens vs Browns Ratio</h3>

      <label>Browns (carbon-rich materials)</label>
      <input
        className="tool-select"
        type="number"
        value={browns}
        onChange={(e) => setBrowns(Number(e.target.value))}
      />

      <label>Greens (nitrogen-rich materials)</label>
      <input
        className="tool-select"
        type="number"
        value={greens}
        onChange={(e) => setGreens(Number(e.target.value))}
      />

      {ratio && (
        <p className="tool-result">
          Current ratio: <strong>{ratio}:1</strong>  
          <br />
          Ideal ratio is <strong>2:1</strong> browns to greens.
        </p>
      )}
    </div>
  );
}
