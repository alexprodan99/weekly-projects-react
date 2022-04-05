import { apiStart, apiEnd, apiError } from './api';
import {
    SET_CATEGORIES,
    SET_CATEGORY,
    SET_JOKE,
    SET_JOKE_LIST,
    SET_SEARCH_TEXT,
} from './types';

const setSearchText = (text) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: text,
    };
};

const setJoke = (joke) => {
    return {
        type: SET_JOKE,
        payload: joke,
    };
};

const setJokeList = (jokeList) => {
    return {
        type: SET_JOKE_LIST,
        payload: jokeList,
    };
};

const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories,
    };
};

const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category,
    };
};

export {
    apiStart,
    apiEnd,
    apiError,
    setSearchText,
    setJoke,
    setJokeList,
    setCategories,
    setCategory,
};
