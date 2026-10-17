import React, { useState, useEffect } from "react";
import "./Quiz.css";

export default function Quiz({ questions, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const handleAnswer = (choice) => {
    setSelected(choice);

    if (choice === question.correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 700);
  };

  useEffect(() => {
    if (finished) {
      const percent = score / questions.length;

      let mastery = "Attempted";

      if (percent >= 1) mastery = "Proficient";
      else if (percent >= 0.5) mastery = "Familiar";

      if (onFinish) onFinish(mastery, score);
    }
  }, [finished, score, questions.length, onFinish]);

  if (finished) {
    return (
      <div className="quiz-finished">
        <h2>Quiz Complete!</h2>
        <p>You scored {score} out of {questions.length}.</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{question.question}</h3>

      <div className="quiz-options">
        {question.options.map((opt, index) => (
          <button
            key={index}
            className={`quiz-option ${
              selected === opt
                ? opt === question.correct
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleAnswer(opt)}
            disabled={selected !== null}
          >
            {opt}
          </button>
        ))}
      </div>

      <p className="quiz-progress">
        Question {current + 1} of {questions.length}
      </p>
    </div>
  );
}
