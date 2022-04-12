import { INCREMENT_SCORE, RESET_SCORE, SET_NAME } from './types';

const setName = (name) => {
    return {
        type: SET_NAME,
        payload: name,
    };
};

const incrementScore = () => {
    return {
        type: INCREMENT_SCORE,
    };
};

const resetScore = () => {
    return {
        type: RESET_SCORE,
    };
};

export { setName, incrementScore, resetScore };
