import React, { useState } from "react";
import "./module.css";

// Tools
import WasteAuditTool from "../../../components/tools/WasteAuditTool";
import RecycleSorter from "../../../components/tools/RecycleSorter";
import UpcycleIdeasTool from "../../../components/tools/UpcycleIdeasTool";

// Quiz
import Quiz from "../../../components/Quiz";
import { completeModule } from "../../../utils/progress";

export default function WasteReduction() {
  const [mastery, setMastery] = useState("Unstarted");

  const [showIntro, setShowIntro] = useState(false);
  const [showAudit, setShowAudit] = useState(false);
  const [showRecycling, setShowRecycling] = useState(false);
  const [showUpcycling, setShowUpcycling] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const handleQuizFinish = (level) => {
    setMastery(level);
    completeModule("waste-reduction", level);
  };

  const wasteQuiz = [
    {
      question: "What is the first step in reducing waste?",
      options: ["Throw away more items", "Conduct a waste audit", "Buy more products", "Ignore trash"],
      correct: "Conduct a waste audit",
    },
    {
      question: "Which of these is NOT recyclable?",
      options: ["Glass bottles", "Aluminum cans", "Plastic bags", "Cardboard"],
      correct: "Plastic bags",
    },
    {
      question: "What is upcycling?",
      options: [
        "Throwing items away",
        "Turning old items into something new",
        "Burning waste",
        "Buying new products"
      ],
      correct: "Turning old items into something new",
    },
    {
      question: "Which habit reduces waste the most?",
      options: ["Single‑use plastics", "Buying in bulk", "Throwing away leftovers", "Using disposable bags"],
      correct: "Buying in bulk",
    },
  ];

  return (
    <div className="module-page">
      <h1>Waste Reduction</h1>

      <div className={`mastery-badge mastery-${mastery}`}>{mastery}</div>

      <p>
        Waste reduction focuses on minimizing what we throw away by reusing,
        recycling, and making smarter choices. Small habits lead to big impact.
      </p>

      {/* Intro */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowIntro(!showIntro)}>
          What Is Waste Reduction? {showIntro ? "▲" : "▼"}
        </button>

        {showIntro && (
          <div className="module-content">
            <p>
              Waste reduction means lowering the amount of trash we produce by
              changing daily habits. It includes recycling, composting, buying
              less, and reusing more.
            </p>
            <ul>
              <li>Reduces pollution</li>
              <li>Saves money</li>
              <li>Protects natural resources</li>
              <li>Supports a sustainable lifestyle</li>
            </ul>
          </div>
        )}
      </div>

      {/* Waste Audit */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowAudit(!showAudit)}>
          Waste Audit {showAudit ? "▲" : "▼"}
        </button>

        {showAudit && (
          <div className="module-content">
            <p>
              A waste audit helps you understand what you throw away the most so
              you can reduce it. It’s the first step toward meaningful change.
            </p>
            <ul>
              <li>Track your trash for 2–3 days</li>
              <li>Sort items into categories</li>
              <li>Identify what can be reduced or replaced</li>
              <li>Set small goals</li>
            </ul>

            <WasteAuditTool />
          </div>
        )}
      </div>

      {/* Recycling */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowRecycling(!showRecycling)}>
          Recycling Basics {showRecycling ? "▲" : "▼"}
        </button>

        {showRecycling && (
          <div className="module-content">
            <p>
              Recycling keeps materials out of landfills and gives them a second
              life. Knowing what can and can’t be recycled is key.
            </p>
            <ul>
              <li>Glass, metal, cardboard, paper = recyclable</li>
              <li>Plastic bags, greasy food containers = not recyclable</li>
              <li>Always rinse containers</li>
              <li>Check your local recycling rules</li>
            </ul>

            <RecycleSorter />
          </div>
        )}
      </div>

      {/* Upcycling */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowUpcycling(!showUpcycling)}>
          Upcycling Ideas {showUpcycling ? "▲" : "▼"}
        </button>

        {showUpcycling && (
          <div className="module-content">
            <p>
              Upcycling turns old or unused items into something new and useful.
              It’s creative, fun, and reduces waste dramatically.
            </p>
            <ul>
              <li>Turn jars into planters</li>
              <li>Make tote bags from old shirts</li>
              <li>Use cans as pencil holders</li>
              <li>Decorate containers for storage</li>
            </ul>

            <UpcycleIdeasTool />
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="module-section">
        <button className="module-toggle" onClick={() => setShowTips(!showTips)}>
          Daily Waste Reduction Tips {showTips ? "▲" : "▼"}
        </button>

        {showTips && (
          <div className="module-content">
            <p>Simple habits make a big difference:</p>
            <ul>
              <li>Carry a reusable water bottle</li>
              <li>Use cloth shopping bags</li>
              <li>Buy in bulk</li>
              <li>Avoid single‑use plastics</li>
              <li>Repair instead of replace</li>
            </ul>
          </div>
        )}
      </div>

      <Quiz questions={wasteQuiz} onFinish={handleQuizFinish} />
    </div>
  );
}
