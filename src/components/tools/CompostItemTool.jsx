import React, { useState } from "react";
import "./Tool.css";

export default function CompostItemTool() {
  const [item, setItem] = useState("");
  const [result, setResult] = useState("");

  const items = {
    "Banana peel": true,
    "Coffee grounds": true,
    "Eggshells": true,
    "Grass clippings": true,
    "Paper towels": true,
    "Dry leaves": true,
    "Cardboard": true,
    "Meat scraps": false,
    "Dairy": false,
    "Oily foods": false,
    "Plastic": false,
    "Glass": false,
  };

  const handleCheck = () => {
    if (!item) {
      setResult("Select an item to check.");
      return;
    }

    if (items[item]) {
      setResult(`${item} IS compostable.`);
    } else {
      setResult(`${item} is NOT compostable.`);
    }
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Compostable Item Checker</h3>

      <select
        className="tool-select"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      >
        <option value="">Select an item</option>
        {Object.keys(items).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <button className="tool-btn" onClick={handleCheck}>
        Check Item
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
