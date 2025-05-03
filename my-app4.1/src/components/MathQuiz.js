import React, { useState, useEffect } from 'react';
import Answer from './Answer';

export default function MathQuiz() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [score, setScore] = useState(0);

  // Generate a new random sum problem
  const generateProblem = () => {
    setA(Math.floor(Math.random() * 10) + 1);
    setB(Math.floor(Math.random() * 10) + 1);
  };

  // On mount, generate the first problem
  useEffect(() => {
    generateProblem();
  }, []);

  // Update score and generate next problem
  const updatePoints = (isCorrect) => {
    setScore(prev => prev + (isCorrect ? 1 : -1));
    generateProblem();
  };

  return (
    <div className="math-quiz">
      <p className="problem">What is <strong>{a}</strong> + <strong>{b}</strong>?</p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
      <p className="score">Score: {score}</p>
    </div>
  );
}
