import React, { useState } from "react";
import "./Tool.css";

export default function RecycleSorter() {
  const [item, setItem] = useState("");
  const [result, setResult] = useState("");

  const recyclables = {
    "Glass Bottle": true,
    "Aluminum Can": true,
    "Cardboard": true,
    "Paper": true,
    "Plastic Bag": false,
    "Greasy Pizza Box": false,
    "Styrofoam": false,
    "Food Waste": false,
  };

  const checkItem = () => {
    if (!item) {
      setResult("Select an item to check.");
      return;
    }

    if (recyclables[item]) {
      setResult(`${item} IS recyclable.`);
    } else {
      setResult(`${item} is NOT recyclable.`);
    }
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Recycle Sorter</h3>

      <select
        className="tool-select"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      >
        <option value="">Select an item</option>
        {Object.keys(recyclables).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <button className="tool-btn" onClick={checkItem}>
        Check Item
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
