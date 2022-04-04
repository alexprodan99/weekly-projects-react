import {
    API_START,
    API_END,
    API_ERROR,
    SET_CATEGORIES,
    SET_JOKE,
    SET_JOKE_LIST,
    SET_SEARCH_TEXT,
} from '../actions/types';

const fetchLabels = new Set([
    'GET_RANDOM_JOKE',
    'GET_JOKES_BY_CATEGORY',
    'SEARCH_JOKE',
    'GET_CATEGORIES',
]);

export default function (state = {}, action) {
    switch (action.type) {
        case API_START:
            if (fetchLabels.has(action.payload)) {
                return { ...state, isLoading: true };
            }
            return state;
        case API_END:
            if (fetchLabels.has(action.payload)) {
                return { ...state, isLoading: false, errorMsg: '' };
            }
            return state;
        case API_ERROR:
            return { ...state, errorMsg: action.payload };
        case SET_SEARCH_TEXT:
            return { ...state, searchText: action.payload };
        case SET_JOKE:
            return { ...state, joke: action.payload };
        case SET_JOKE_LIST:
            return { ...state, jokeList: action.payload };
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        default:
            return state;
    }
}
