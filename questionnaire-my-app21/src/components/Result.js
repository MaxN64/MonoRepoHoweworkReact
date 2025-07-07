import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Result.module.css';
import { resetQuestionnaire } from '../features/questionnaire/questionnaireSlice';

const Result = () => {
  const score = useSelector(state => state.questionnaire.score);
  const submitted = useSelector(state => state.questionnaire.submitted);
  const dispatch = useDispatch();

  if (!submitted) return null;

  return (
    <div>
      <h2 className={styles.score}>Your Score: {score}</h2>
      <button className={styles.resetBtn} onClick={() => dispatch(resetQuestionnaire())}>
        Reset
      </button>
    </div>
  );
};

export default Result;
