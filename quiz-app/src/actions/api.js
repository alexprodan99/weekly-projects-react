import { API_START, API_ERROR, API_END } from './types';

const apiStart = () => {
  return {
    type: API_START,
  };
};

const apiEnd = () => {
  return {
    type: API_END,
  };
};

const apiError = (errorMsg) => {
  return {
    type: API_ERROR,
    payload: errorMsg,
  };
};

export { apiStart, apiEnd, apiError };
