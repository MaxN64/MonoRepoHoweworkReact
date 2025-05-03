import React, { useState } from 'react';
import styles from './Answer.module.css'

export default function Answer({ a, b, updatePoints }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAnswer = parseInt(input, 10);
    if (!isNaN(userAnswer)) {
      updatePoints(userAnswer === (a + b));
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.answerForm}>
      <input
        type="number"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Your answer"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
}
