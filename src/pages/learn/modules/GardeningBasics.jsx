import React, { useState } from "react";
import "./module.css";

import SoilChecklist from "../../../components/tools/SoilChecklist";
import WateringTool from "../../../components/tools/WateringTool";
import SunlightTool from "../../../components/tools/SunlightTool";

import Quiz from "../../../components/Quiz";
import { completeModule } from "../../../utils/progress";

export default function GardeningBasics() {
  const [mastery, setMastery] = useState("Unstarted");

  // Collapsible sections
  const [showSoil, setShowSoil] = useState(false);
  const [showWatering, setShowWatering] = useState(false);
  const [showSunlight, setShowSunlight] = useState(false);
  const [showCare, setShowCare] = useState(false);

  const handleQuizFinish = (level) => {
    setMastery(level);
    completeModule("gardening-basics", level);
  };

  const quizQuestions = [
    {
      question: "What does healthy soil contain?",
      options: ["Sand only", "Nutrients & microbes", "Plastic bits", "Just water"],
      correct: "Nutrients & microbes",
    },
    {
      question: "How often should most plants be watered?",
      options: ["Every hour", "When soil is dry", "Once a month", "Never"],
      correct: "When soil is dry",
    },
    {
      question: "Which direction gives the most sunlight?",
      options: ["North", "South", "West", "Basement"],
      correct: "South",
    },
    {
      question: "What is the best time of day to water plants?",
      options: ["Midday", "Evening", "Early morning", "Late night"],
      correct: "Early morning",
    },
  ];

  return (
    <div className="module-page">
      <h1>Gardening Basics</h1>

      <div className={`mastery-badge mastery-${mastery}`}>{mastery}</div>

      <p>
        Gardening Basics teaches soil health, watering techniques, sunlight needs,
        and beginner plant care. These fundamentals help you grow stronger, healthier plants.
      </p>

      {/* Soil Health */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowSoil(!showSoil)}>
          Soil Health {showSoil ? "▲" : "▼"}
        </button>

        {showSoil && (
          <div className="module-content">
            <p>Healthy soil contains nutrients, organic matter, microbes, and good structure.</p>
            <SoilChecklist />
          </div>
        )}
      </div>

      {/* Watering Basics */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowWatering(!showWatering)}>
          Watering Basics {showWatering ? "▲" : "▼"}
        </button>

        {showWatering && (
          <div className="module-content">
            <p>Most plants prefer watering when the top inch of soil is dry.</p>
            <WateringTool />
          </div>
        )}
      </div>

      {/* Sunlight Needs */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowSunlight(!showSunlight)}>
          Sunlight Needs {showSunlight ? "▲" : "▼"}
        </button>

        {showSunlight && (
          <div className="module-content">
            <p>Most vegetables need 6–8 hours of direct sunlight.</p>
            <SunlightTool />
          </div>
        )}
      </div>

      {/* Basic Plant Care */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowCare(!showCare)}>
          Basic Plant Care {showCare ? "▲" : "▼"}
        </button>

        {showCare && (
          <div className="module-content">
            <p>Good plant care includes pruning, fertilizing, and monitoring for pests.</p>
            <ul>
              <li>Remove dead leaves</li>
              <li>Use balanced fertilizer</li>
              <li>Check for pests weekly</li>
            </ul>
          </div>
        )}
      </div>

      <Quiz questions={quizQuestions} onFinish={handleQuizFinish} />
    </div>
  );
}
