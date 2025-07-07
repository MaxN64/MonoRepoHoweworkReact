import React from 'react';
import styles from './Question.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice';

const Question = ({ question, index, disabled }) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.questionnaire.answers[index]);

  const handleChange = (e) => {
    dispatch(answerQuestion({ questionIndex: index, answerIndex: parseInt(e.target.value) }));
  };

  return (
    <div className={styles.questionBlock}>
      <h3>{question.text}</h3>
      {question.options.map((option, i) => (
        <label key={i} className={styles.optionLabel}>
          <input
            type="radio"
            name={`question-${index}`}
            value={i}
            checked={selected === i}
            onChange={handleChange}
            disabled={disabled}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
