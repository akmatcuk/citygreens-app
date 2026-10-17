import React, { useState } from "react";
import "./Tool.css";

export default function MicrogreensGuide() {
  const [step, setStep] = useState(0);

  const steps = [
    "Fill a shallow tray with 1 inch of soil or a grow mat.",
    "Evenly sprinkle microgreen seeds across the surface.",
    "Mist with water and cover the tray for 2–3 days.",
    "Remove cover and place under sunlight or grow lights.",
    "Mist daily and keep the tray moist.",
    "Harvest in 7–12 days when leaves are fully formed.",
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const restartGuide = () => {
    setStep(0);
  };

  return (
    <div className="tool-box">
      <h3 className="tool-title">Microgreens Step‑by‑Step Guide</h3>

      <p className="tool-result">{steps[step]}</p>

      {/* If NOT finished → show Next Step */}
      {step < steps.length - 1 && (
        <button className="tool-btn" onClick={nextStep}>
          Next Step
        </button>
      )}

      {/* If finished → show Restart Guide */}
      {step === steps.length - 1 && (
        <button className="tool-btn" onClick={restartGuide}>
          Restart Guide
        </button>
      )}
    </div>
  );
}
