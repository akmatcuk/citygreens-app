import React, { useState } from "react";
import "./Tool.css";

export default function UpcycleIdeasTool() {
  const [item, setItem] = useState("");
  const [idea, setIdea] = useState("");

  const ideas = {
    "Glass Jar": "Turn it into a planter, candle holder, or storage container.",
    "Tin Can": "Decorate it and use it as a pencil holder or mini planter.",
    "Old T-Shirt": "Make a reusable tote bag or cleaning cloth.",
    "Cardboard Box": "Create drawer organizers or storage bins.",
    "Wine Bottle": "Use as a vase or cut into a drinking glass.",
    "Plastic Container": "Use for seed starting or organizing small items.",
  };

  const generateIdea = () => {
    if (!item) {
      setIdea("Select an item to upcycle.");
      return;
    }
    setIdea(ideas[item]);
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Upcycling Ideas</h3>

      <select
        className="tool-select"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      >
        <option value="">Select an item</option>
        {Object.keys(ideas).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <button className="tool-btn" onClick={generateIdea}>
        Get Idea
      </button>

      {idea && <p className="tool-result">{idea}</p>}
    </div>
  );
}
