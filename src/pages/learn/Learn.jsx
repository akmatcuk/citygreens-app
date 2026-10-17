import React from "react";
import { getProgress } from "../../utils/progress";
import "./learn.css";

export default function Learn({ learnModules }) {
  const progress = getProgress();

  const normalize = (value) => {
    if (!value) return "Unstarted";
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  const completedCount = Object.values(progress).filter(
    (level) => normalize(level) !== "Unstarted"
  ).length;

  const percent = Math.round((completedCount / learnModules.length) * 100);

  const clearProgress = () => {
    if (window.confirm("Are you sure you want to clear all progress?")) {
      localStorage.removeItem("progress");
      window.location.reload();
    }
  };

  return (
    <div className="learn-page">
      <h1>Learn</h1>

      <p className="learn-progress-text">
        {completedCount} of {learnModules.length} modules completed ({percent}%)
      </p>

      <button className="clear-progress-btn" onClick={clearProgress}>
        Clear Progress
      </button>

      <div className="learn-modules">
        {learnModules.map((module) => {
          const mastery = normalize(progress[module.id]);

          return (
            <div key={module.id} className="learn-card">
              <h2>{module.title}</h2>

              <div className={`learn-badge mastery-${mastery}`}>
                {mastery}
              </div>

              <p>{module.description}</p>

              {/* FIXED LINK */}
              <a href={`/learn/${module.id}`} className="learn-button">
                Start Module
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
