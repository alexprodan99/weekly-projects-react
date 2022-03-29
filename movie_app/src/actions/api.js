import { API_START, API_ERROR, API_END } from './types';

const apiStart = (label) => {
    return {
        type: API_START,
        payload: label,
    };
};

const apiEnd = (label) => {
    return {
        type: API_END,
        payload: label,
    };
};

const apiError = (errorMsg) => {
    return {
        type: API_ERROR,
        payload: errorMsg,
    };
};

export { apiStart, apiEnd, apiError };
