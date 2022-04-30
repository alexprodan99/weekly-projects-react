import {
  API_START,
  API_END,
  API_ERROR,
  SET_QUESTIONS,
  SET_GAME_MODE,
  SET_QUESTION_INDEX,
  INCREMENT_CORRECT_ANSWERS,
  RESET_CORRECT_ANSWERS,
  SET_USER_ANSWER,
  RESET_USER_ANSWERS,
} from '../actions/types';

const initState = {
  questions: [],
  questionIndex: 0,
  correctAnswersCount: 0,
  userAnswers: {},
};

export default function (state = initState, action) {
  switch (action.type) {
    case API_START:
      return { ...state, loading: true, errorMsg: '' };
    case API_END:
      return { ...state, loading: false, errorMsg: '' };
    case API_ERROR:
      return { ...state, loading: false, errorMsg: action.payload };
    case INCREMENT_CORRECT_ANSWERS:
      return { ...state, correctAnswersCount: state.correctAnswersCount + 1 };
    case RESET_CORRECT_ANSWERS:
      return { ...state, correctAnswersCount: 0 };
    case RESET_USER_ANSWERS:
      return { ...state, userAnswers: {} };
    case SET_GAME_MODE:
      return { ...state, gameMode: action.payload };
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_QUESTION_INDEX:
      return { ...state, questionIndex: action.payload };
    case SET_USER_ANSWER:
      return {
        ...state,
        userAnswers: {
          ...state.userAnswers,
          [state.questionIndex]: action.payload,
        },
      };
    default:
      return state;
  }
}
