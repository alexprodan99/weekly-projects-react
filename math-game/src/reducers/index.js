import {
    DECREMENT_LIVES,
    INCREMENT_SCORE,
    RESET_LIVES,
    RESET_SCORE,
    SET_NAME,
    SET_QUESTION,
    SET_RESPONSE,
} from '../actions/types';

const initState = {
    score: 0,
    lives: 3,
    name: '',
    question: '',
    response: '',
};

export default function (state = initState, action) {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_QUESTION:
            return { ...state, question: action.payload };
        case SET_RESPONSE:
            return { ...state, response: action.payload };
        case INCREMENT_SCORE:
            return { ...state, score: state.score + 1 };
        case DECREMENT_LIVES:
            return { ...state, lives: state.lives - 1 };
        case RESET_SCORE:
            return { ...state, score: 0 };
        case RESET_LIVES:
            return { ...state, lives: 3 };
        default:
            return state;
    }
}
