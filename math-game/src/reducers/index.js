import { INCREMENT_SCORE, RESET_SCORE, SET_NAME } from '../actions/types';

const initState = {
    score: 0,
    name: '',
};

export default function (state = initState, action) {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };
        case INCREMENT_SCORE:
            return { ...state, score: state.score + 1 };
        case RESET_SCORE:
            return { ...state, score: 0 };
        default:
            return state;
    }
}
