import { apiStart, apiEnd, apiError } from './api';
import { SET_QUESTIONS } from './types';

const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  };
};

export { apiStart, apiEnd, apiError, setQuestions };
