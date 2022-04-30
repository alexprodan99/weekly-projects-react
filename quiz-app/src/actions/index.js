import { apiStart, apiEnd, apiError } from './api';
import {
  SET_DIFFICULTY,
  SET_GAME_MODE,
  SET_NR_OF_QUESTIONS,
  SET_QUESTIONS,
} from './types';

const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  };
};

const setDifficulty = (difficulty) => {
  return {
    type: SET_DIFFICULTY,
    payload: difficulty,
  };
};

const setNrOfQuestions = (nrOfQuestions) => {
  return {
    type: SET_NR_OF_QUESTIONS,
    payload: nrOfQuestions,
  };
};

const setGameMode = (gameMode) => {
  return {
    type: SET_GAME_MODE,
    payload: gameMode,
  };
};

export {
  apiStart,
  apiEnd,
  apiError,
  setQuestions,
  setDifficulty,
  setNrOfQuestions,
  setGameMode,
};
