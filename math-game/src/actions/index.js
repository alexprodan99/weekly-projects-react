import {
    DECREMENT_LIVES,
    INCREMENT_SCORE,
    RESET_SCORE,
    RESET_LIVES,
    SET_NAME,
    SET_QUESTION,
    SET_RESPONSE,
} from './types';

const setName = (name) => {
    return {
        type: SET_NAME,
        payload: name,
    };
};

const setQuestion = (question) => {
    return {
        type: SET_QUESTION,
        payload: question,
    };
};

const setResponse = (response) => {
    return {
        type: SET_RESPONSE,
        payload: response,
    };
};

const incrementScore = () => {
    return {
        type: INCREMENT_SCORE,
    };
};

const decrementLives = () => {
    return {
        type: DECREMENT_LIVES,
    };
};

const resetScore = () => {
    return {
        type: RESET_SCORE,
    };
};

const resetLives = () => {
    return {
        type: RESET_LIVES,
    };
};

export {
    setName,
    setQuestion,
    setResponse,
    incrementScore,
    decrementLives,
    resetScore,
    resetLives,
};
