import { apiStart, apiEnd, apiError } from './api';
import {
  INCREMENT_CORRECT_ANSWERS,
  RESET_CORRECT_ANSWERS,
  RESET_USER_ANSWERS,
  SET_GAME_MODE,
  SET_QUESTIONS,
  SET_QUESTION_INDEX,
  SET_USER_ANSWER,
} from './types';

const incrementCorrectAnswers = () => {
  return {
    type: INCREMENT_CORRECT_ANSWERS,
  };
};

const resetCorrectAnswers = () => {
  return {
    type: RESET_CORRECT_ANSWERS,
  };
};

const resetUserAnswers = () => {
  return {
    type: RESET_USER_ANSWERS,
  };
};

const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  };
};

const setGameMode = (gameMode) => {
  return {
    type: SET_GAME_MODE,
    payload: gameMode,
  };
};

const setQuestionIndex = (questionIndex) => {
  return {
    type: SET_QUESTION_INDEX,
    payload: questionIndex,
  };
};

const setUserAnswer = (userAnswer) => {
  return {
    type: SET_USER_ANSWER,
    payload: userAnswer,
  };
};

export {
  apiStart,
  apiEnd,
  apiError,
  incrementCorrectAnswers,
  resetCorrectAnswers,
  resetUserAnswers,
  setQuestions,
  setGameMode,
  setQuestionIndex,
  setUserAnswer,
};
