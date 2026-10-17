import React, { useState } from "react";
import "./Tool.css";

export default function SystemSelector() {
  const [space, setSpace] = useState("");
  const [experience, setExperience] = useState("");
  const [result, setResult] = useState("");

  const handleSelect = () => {
    if (!space || !experience) {
      setResult("Select both options.");
      return;
    }

    if (space === "Small" && experience === "Beginner") {
      setResult("Recommended: Kratky or simple DWC (Deep Water Culture).");
    } else if (space === "Medium" && experience === "Intermediate") {
      setResult("Recommended: NFT (Nutrient Film Technique).");
    } else if (space === "Large" && experience === "Advanced") {
      setResult("Recommended: Ebb & Flow or Aeroponics.");
    } else {
      setResult("Recommended: DWC — reliable and beginner-friendly.");
    }
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Hydroponic System Selector</h3>

      <select
        className="tool-select"
        value={space}
        onChange={(e) => setSpace(e.target.value)}
      >
        <option value="">Growing space</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <select
        className="tool-select"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="">Experience level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <button className="tool-btn" onClick={handleSelect}>
        Recommend System
      </button>

      {result && <p className="tool-result">{result}</p>}
    </div>
  );
}
