import React, { useState } from "react";
import "./module.css";

// Tools
import WaterSaverTool from "../../../components/tools/WaterSaverTool";
import EnergyEstimator from "../../../components/tools/EnergyEstimator";
import SustainableSwapTool from "../../../components/tools/SustainableSwapTool";

// Quiz
import Quiz from "../../../components/Quiz";
import { completeModule } from "../../../utils/progress";

export default function ResourceConservation() {
  const [mastery, setMastery] = useState("Unstarted");

  const [showIntro, setShowIntro] = useState(false);
  const [showWater, setShowWater] = useState(false);
  const [showEnergy, setShowEnergy] = useState(false);
  const [showSwaps, setShowSwaps] = useState(false);
  const [showHabits, setShowHabits] = useState(false);

  const handleQuizFinish = (level) => {
    setMastery(level);
    completeModule("resource-conservation", level);
  };

  const conservationQuiz = [
    {
      question: "Which action saves the most water?",
      options: ["Long showers", "Fixing leaks", "Running half-full laundry loads", "Watering daily"],
      correct: "Fixing leaks",
    },
    {
      question: "Which appliance uses the most energy?",
      options: ["LED light bulb", "Laptop", "Refrigerator", "Phone charger"],
      correct: "Refrigerator",
    },
    {
      question: "What is a sustainable swap?",
      options: [
        "Replacing reusable items with disposable ones",
        "Choosing eco-friendly alternatives",
        "Throwing away old items",
        "Buying more plastic products"
      ],
      correct: "Choosing eco-friendly alternatives",
    },
    {
      question: "Which habit reduces energy use?",
      options: ["Leaving lights on", "Unplugging devices", "Running AC all day", "Using incandescent bulbs"],
      correct: "Unplugging devices",
    },
  ];

  return (
    <div className="module-page">
      <h1>Resource Conservation</h1>

      <div className={`mastery-badge mastery-${mastery}`}>{mastery}</div>

      <p>
        Resource conservation means using water, energy, and materials wisely.
        Small changes in daily habits can significantly reduce environmental impact.
      </p>

      {/* Intro */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowIntro(!showIntro)}>
          What Is Resource Conservation? {showIntro ? "▲" : "▼"}
        </button>

        {showIntro && (
          <div className="module-content">
            <p>
              Resource conservation focuses on reducing waste, saving water,
              lowering energy use, and choosing sustainable alternatives.
            </p>
            <ul>
              <li>Protects the environment</li>
              <li>Saves money</li>
              <li>Reduces pollution</li>
              <li>Supports long-term sustainability</li>
            </ul>
          </div>
        )}
      </div>

      {/* Water */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowWater(!showWater)}>
          Water Conservation {showWater ? "▲" : "▼"}
        </button>

        {showWater && (
          <div className="module-content">
            <ul>
              <li>Fix leaks immediately</li>
              <li>Take shorter showers</li>
              <li>Use efficient appliances</li>
              <li>Collect rainwater for plants</li>
            </ul>

            <WaterSaverTool />
          </div>
        )}
      </div>

      {/* Energy */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowEnergy(!showEnergy)}>
          Energy Conservation {showEnergy ? "▲" : "▼"}
        </button>

        {showEnergy && (
          <div className="module-content">
            <ul>
              <li>Switch to LED bulbs</li>
              <li>Unplug unused devices</li>
              <li>Use energy-efficient appliances</li>
              <li>Limit air conditioning use</li>
            </ul>

            <EnergyEstimator />
          </div>
        )}
      </div>

      {/* Swaps */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowSwaps(!showSwaps)}>
          Sustainable Swaps {showSwaps ? "▲" : "▼"}
        </button>

        {showSwaps && (
          <div className="module-content">
            <ul>
              <li>Reusable water bottles</li>
              <li>Cloth shopping bags</li>
              <li>Bamboo toothbrushes</li>
              <li>Glass food containers</li>
            </ul>

            <SustainableSwapTool />
          </div>
        )}
      </div>

      {/* Habits */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowHabits(!showHabits)}>
          Daily Conservation Habits {showHabits ? "▲" : "▼"}
        </button>

        {showHabits && (
          <div className="module-content">
            <ul>
              <li>Turn off lights when leaving a room</li>
              <li>Air dry clothes when possible</li>
              <li>Use cold water for laundry</li>
              <li>Buy durable, long-lasting products</li>
            </ul>
          </div>
        )}
      </div>

      <Quiz questions={conservationQuiz} onFinish={handleQuizFinish} />
    </div>
  );
}
