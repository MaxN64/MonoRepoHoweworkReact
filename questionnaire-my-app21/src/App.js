import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './components/Question';
import Result from './components/Result';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import styles from './App.module.css';

function App() {
  const { questions, answers, submitted } = useSelector(state => state.questionnaire);
  const dispatch = useDispatch();

  const allAnswered = answers.every(ans => ans !== null);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Questionnaire</h1>
      {questions.map((q, idx) => (
        <Question key={q.id} question={q} index={idx} disabled={submitted} />
      ))}
      <button
        className={styles.submitBtn}
        onClick={handleSubmit}
        disabled={!allAnswered || submitted}
      >
        Submit
      </button>
      <Result />
    </div>
  );
}

export default App;
