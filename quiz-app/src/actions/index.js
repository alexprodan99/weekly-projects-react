import { apiStart, apiEnd, apiError } from './api';
import { SET_GAME_MODE, SET_QUESTIONS } from './types';

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

export { apiStart, apiEnd, apiError, setQuestions, setGameMode };
