import React, { useState } from "react";
import "./module.css";

import SpacePlanner from "../../../components/tools/SpacePlanner";
import ContainerSelector from "../../../components/tools/ContainerSelector";
import MicrogreensGuide from "../../../components/tools/MicrogreensGuide";

import Quiz from "../../../components/Quiz";
import { completeModule } from "../../../utils/progress";

export default function UrbanFarming() {
  const [mastery, setMastery] = useState("Unstarted");

  const [showIntro, setShowIntro] = useState(false);
  const [showSpace, setShowSpace] = useState(false);
  const [showContainers, setShowContainers] = useState(false);
  const [showMicrogreens, setShowMicrogreens] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);

  const handleQuizFinish = (level) => {
    setMastery(level);
    completeModule("urban-farming", level);
  };

  const urbanQuiz = [
    {
      question: "What is a major benefit of urban farming?",
      options: ["Requires large land", "Reduces food miles", "Needs heavy machinery", "Only works outdoors"],
      correct: "Reduces food miles",
    },
    {
      question: "Which crop is ideal for small urban spaces?",
      options: ["Corn", "Pumpkins", "Microgreens", "Large fruit trees"],
      correct: "Microgreens",
    },
    {
      question: "What is a common challenge in urban farming?",
      options: ["Too much land", "Excess sunlight", "Limited space", "High soil availability"],
      correct: "Limited space",
    },
    {
      question: "Which container is best for deep‑rooted plants?",
      options: ["Shallow tray", "Small cup", "5‑gallon bucket", "Paper bag"],
      correct: "5‑gallon bucket",
    },
  ];

  return (
    <div className="module-page">
      <h1>Urban Farming</h1>

      <div className={`mastery-badge mastery-${mastery}`}>{mastery}</div>

      <p>
        Urban farming makes it possible to grow fresh produce in small spaces.
      </p>

      {/* Intro */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowIntro(!showIntro)}>
          What Is Urban Farming? {showIntro ? "▲" : "▼"}
        </button>
        {showIntro && (
          <div className="module-content">
            <p>
              Urban farming focuses on maximizing limited space to grow edible plants.
            </p>
            <ul>
              <li>Uses small or unconventional spaces</li>
              <li>Relies on containers and vertical setups</li>
              <li>Great for beginners</li>
              <li>Perfect for herbs, greens, and compact vegetables</li>
            </ul>
          </div>
        )}
      </div>

      {/* Space Planning */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowSpace(!showSpace)}>
          Space Planning {showSpace ? "▲" : "▼"}
        </button>
        {showSpace && (
          <div className="module-content">
            <SpacePlanner />
          </div>
        )}
      </div>

      {/* Containers */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowContainers(!showContainers)}>
          Choosing Containers {showContainers ? "▲" : "▼"}
        </button>
        {showContainers && (
          <div className="module-content">
            <ContainerSelector />
          </div>
        )}
      </div>

      {/* Microgreens */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowMicrogreens(!showMicrogreens)}>
          Growing Microgreens {showMicrogreens ? "▲" : "▼"}
        </button>
        {showMicrogreens && (
          <div className="module-content">
            <MicrogreensGuide />
          </div>
        )}
      </div>

      {/* Challenges */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowChallenges(!showChallenges)}>
          Common Challenges {showChallenges ? "▲" : "▼"}
        </button>
        {showChallenges && (
          <div className="module-content">
            <ul>
              <li>Limited space</li>
              <li>Inconsistent sunlight</li>
              <li>Wind exposure on balconies</li>
              <li>Small containers dry out faster</li>
            </ul>
          </div>
        )}
      </div>

      <Quiz questions={urbanQuiz} onFinish={handleQuizFinish} />
    </div>
  );
}
