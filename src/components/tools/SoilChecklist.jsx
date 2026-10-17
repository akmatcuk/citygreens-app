import React, { useState } from "react";
import "./Tool.css";

export default function SoilChecklist() {
  const [checks, setChecks] = useState({
    drainage: false,
    organic: false,
    microbes: false,
    texture: false,
  });

  const toggle = (key) => {
    setChecks({ ...checks, [key]: !checks[key] });
  };

  const score =
    Object.values(checks).filter((v) => v === true).length * 25;

  return (
    <div className="tool-box">
      <h3 className="tool-title">Soil Health Checklist</h3>

      <div className="tool-checklist">
        <label>
          <input
            type="checkbox"
            checked={checks.drainage}
            onChange={() => toggle("drainage")}
          />
          Good drainage
        </label>

        <label>
          <input
            type="checkbox"
            checked={checks.organic}
            onChange={() => toggle("organic")}
          />
          Organic matter present
        </label>

        <label>
          <input
            type="checkbox"
            checked={checks.microbes}
            onChange={() => toggle("microbes")}
          />
          Active microbes
        </label>

        <label>
          <input
            type="checkbox"
            checked={checks.texture}
            onChange={() => toggle("texture")}
          />
          Healthy soil texture
        </label>
      </div>

      <p className="tool-result">
        Soil Health Score: <strong>{score}%</strong>
      </p>
    </div>
  );
}
