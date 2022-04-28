import { API_START, API_END, API_ERROR, SET_QUESTIONS } from '../actions/types';

const initState = {
  questions: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case API_START:
      return { ...state, loading: true, errorMsg: '' };
    case API_END:
      return { ...state, loading: false, errorMsg: '' };
    case API_ERROR:
      return { ...state, loading: false, errorMsg: action.payload };
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}
