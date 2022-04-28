import ky from 'ky';
import { apiStart, apiEnd, apiError, setQuestions } from '../actions';

const BASE_URL = 'https://opentdb.com/api.php';

const fetchQuickGame = () => async (dispatch) => {
  dispatch(apiStart());
  try {
    const result = await ky(`${BASE_URL}?amount=10`).json();
    dispatch(setQuestions(result.results));
    dispatch(apiEnd());
  } catch (error) {
    dispatch(apiError(error.message));
  }
};

const fetchCustomGame = (difficulty, nrOfQuestions) => async (dispatch) => {
  dispatch(apiStart());
  try {
    const result = await ky(
      `${BASE_URL}?amount=${nrOfQuestions}&difficulty=${difficulty}`
    ).json();
    dispatch(setQuestions(result.results));
    dispatch(apiEnd());
  } catch (error) {
    dispatch(apiError(error.message));
  }
};

export { fetchQuickGame, fetchCustomGame };
