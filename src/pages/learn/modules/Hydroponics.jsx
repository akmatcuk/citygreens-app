import React, { useState } from "react";
import "./module.css";

import PHHelper from "../../../components/tools/PHHelper";
import NutrientMixTool from "../../../components/tools/NutrientMixTool";
import SystemSelector from "../../../components/tools/SystemSelector";

import Quiz from "../../../components/Quiz";
import { completeModule } from "../../../utils/progress";

export default function Hydroponics() {
  const [mastery, setMastery] = useState("Unstarted");

  const [showIntro, setShowIntro] = useState(false);
  const [showSystems, setShowSystems] = useState(false);
  const [showNutrients, setShowNutrients] = useState(false);
  const [showPH, setShowPH] = useState(false);
  const [showLighting, setShowLighting] = useState(false);

  const handleQuizFinish = (level) => {
    setMastery(level);
    completeModule("hydroponics", level);
  };

  const hydroQuiz = [
    {
      question: "What is the ideal pH range for hydroponics?",
      options: ["4.0–5.0", "5.5–6.5", "6.5–7.5", "7.5–8.5"],
      correct: "5.5–6.5",
    },
    {
      question: "Which hydroponic system is best for beginners?",
      options: ["Aeroponics", "NFT", "DWC", "Ebb & Flow"],
      correct: "DWC",
    },
    {
      question: "What happens if pH is too high?",
      options: [
        "Plants absorb nutrients better",
        "Nutrient lockout occurs",
        "Roots dry out",
        "Water evaporates faster",
      ],
      correct: "Nutrient lockout occurs",
    },
    {
      question: "What is a common nutrient dosage?",
      options: ["1 ml per gallon", "5 ml per gallon", "20 ml per gallon", "50 ml per gallon"],
      correct: "5 ml per gallon",
    },
  ];

  return (
    <div className="module-page">
      <h1>Hydroponics</h1>

      <div className={`mastery-badge mastery-${mastery}`}>{mastery}</div>

      <p>
        Hydroponics is a soil-free growing method that uses nutrient-rich water
        to support plant growth.
      </p>

      {/* Intro */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowIntro(!showIntro)}>
          What Is Hydroponics? {showIntro ? "▲" : "▼"}
        </button>
        {showIntro && (
          <div className="module-content">
            <p>
              Hydroponics replaces soil with water enriched with essential nutrients.
            </p>
            <ul>
              <li>No soil required</li>
              <li>Faster growth rates</li>
              <li>Efficient nutrient uptake</li>
              <li>Ideal for indoor or urban growing</li>
            </ul>
          </div>
        )}
      </div>

      {/* Systems */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowSystems(!showSystems)}>
          Types of Hydroponic Systems {showSystems ? "▲" : "▼"}
        </button>
        {showSystems && (
          <div className="module-content">
            <ul>
              <li><strong>DWC:</strong> Roots in oxygenated water</li>
              <li><strong>NFT:</strong> Thin nutrient film</li>
              <li><strong>Drip:</strong> Nutrients dripped onto roots</li>
              <li><strong>Ebb & Flow:</strong> Flood & drain cycles</li>
              <li><strong>Aeroponics:</strong> Nutrient mist</li>
            </ul>
            <SystemSelector />
          </div>
        )}
      </div>

      {/* Nutrients */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowNutrients(!showNutrients)}>
          Nutrient Solutions {showNutrients ? "▲" : "▼"}
        </button>
        {showNutrients && (
          <div className="module-content">
            <ul>
              <li>Macronutrients: N, P, K</li>
              <li>Secondary: Ca, Mg, S</li>
              <li>Micronutrients: Fe, Mn, Zn, Cu, B</li>
              <li>Ideal pH: 5.5–6.5</li>
            </ul>
            <NutrientMixTool />
          </div>
        )}
      </div>

      {/* pH */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowPH(!showPH)}>
          pH Adjustment {showPH ? "▲" : "▼"}
        </button>
        {showPH && (
          <div className="module-content">
            <p>Maintaining proper pH prevents nutrient lockout.</p>
            <PHHelper />
          </div>
        )}
      </div>

      {/* Lighting */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowLighting(!showLighting)}>
          Lighting & Growth Cycles {showLighting ? "▲" : "▼"}
        </button>
        {showLighting && (
          <div className="module-content">
            <ul>
              <li>LED grow lights are most efficient</li>
              <li>Blue light promotes vegetative growth</li>
              <li>Red light promotes flowering</li>
              <li>Most plants need 12–16 hours of light daily</li>
            </ul>
          </div>
        )}
      </div>

      <Quiz questions={hydroQuiz} onFinish={handleQuizFinish} />
    </div>
  );
}
