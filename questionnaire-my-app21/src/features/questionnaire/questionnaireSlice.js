import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Question 1?',
      options: ['Option 1', 'Option 2'],
      correct: 0,
    },
    {
      id: 2,
      text: 'Question 2?',
      options: ['Option 1', 'Option 2'],
      correct: 1,
    },
    {
      id: 3,
      text: 'Question 3?',
      options: ['Option 1', 'Option 2'],
      correct: 0,
    },
    {
      id: 4,
      text: 'Question 4?',
      options: ['Option 1', 'Option 2'],
      correct: 0,
    },
    {
      id: 5,
      text: 'Question 5?',
      options: ['Option 1', 'Option 2'],
      correct: 1,
    },
  ],
  answers: [null, null, null, null, null],
  score: null,
  submitted: false,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { questionIndex, answerIndex } = action.payload;
      state.answers[questionIndex] = answerIndex;
    },
    submitAnswers(state) {
      let score = 0;
      state.questions.forEach((q, i) => {
        if (state.answers[i] === q.correct) score += 1;
      });
      state.score = score;
      state.submitted = true;
    },
    resetQuestionnaire(state) {
      state.answers = [null, null, null, null, null];
      state.score = null;
      state.submitted = false;
    },
  },
});

export const { answerQuestion, submitAnswers, resetQuestionnaire } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
