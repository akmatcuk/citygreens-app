import React, { useState } from "react";
import "./module.css";

import CompostItemTool from "../../../components/tools/CompostItemTool";
import GreensBrownsTool from "../../../components/tools/GreensBrownsTool";
import MoistureTool from "../../../components/tools/MoistureTool";
import Quiz from "../../../components/Quiz";
import { completeModule } from "../../../utils/progress";

export default function Composting() {
  const [mastery, setMastery] = useState("Unstarted");

  const [showWhat, setShowWhat] = useState(false);
  const [showGreensBrowns, setShowGreensBrowns] = useState(false);
  const [showMaintenance, setShowMaintenance] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  const handleQuizFinish = (level) => {
    setMastery(level);
    completeModule("composting", level);
  };

  const compostQuiz = [
    {
      question: "What is the ideal greens-to-browns ratio?",
      options: ["1:1", "2:1", "3:1", "1:2"],
      correct: "2:1",
    },
    {
      question: "Which of these is NOT compostable?",
      options: ["Banana peel", "Coffee grounds", "Meat scraps", "Eggshells"],
      correct: "Meat scraps",
    },
    {
      question: "What should you add if compost is too wet?",
      options: ["More greens", "More browns", "More water", "More microbes"],
      correct: "More browns",
    },
    {
      question: "What helps compost break down faster?",
      options: ["Turning/aeration", "Adding plastic", "Keeping it dry", "Adding salt"],
      correct: "Turning/aeration",
    },
  ];

  return (
    <div className="module-page">
      <h1>Composting</h1>

      <div className={`mastery-badge mastery-${mastery}`}>{mastery}</div>

      <p>
        Composting transforms food scraps and yard waste into nutrient-rich organic matter.
      </p>

      {/* What is compost */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowWhat(!showWhat)}>
          What Is Compost? {showWhat ? "▲" : "▼"}
        </button>
        {showWhat && (
          <div className="module-content">
            <p>Compost is decomposed organic material created by microbes, moisture, and oxygen.</p>
            <CompostItemTool />
          </div>
        )}
      </div>

      {/* Greens vs Browns */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowGreensBrowns(!showGreensBrowns)}>
          Greens vs Browns {showGreensBrowns ? "▲" : "▼"}
        </button>
        {showGreensBrowns && (
          <div className="module-content">
            <p>Composting requires a balance of nitrogen-rich greens and carbon-rich browns.</p>
            <GreensBrownsTool />
          </div>
        )}
      </div>

      {/* Maintenance */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowMaintenance(!showMaintenance)}>
          Maintaining a Compost Pile {showMaintenance ? "▲" : "▼"}
        </button>
        {showMaintenance && (
          <div className="module-content">
            <MoistureTool />
          </div>
        )}
      </div>

      {/* Benefits */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowBenefits(!showBenefits)}>
          Benefits of Compost {showBenefits ? "▲" : "▼"}
        </button>
        {showBenefits && (
          <div className="module-content">
            <p>Compost improves soil health, supports microbes, and helps plants grow stronger.</p>
          </div>
        )}
      </div>

      <Quiz questions={compostQuiz} onFinish={handleQuizFinish} />
    </div>
  );
}
