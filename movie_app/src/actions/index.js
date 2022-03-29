import { SET_MOVIE_LIST, SET_TOTAL_PAGES, SET_TOTAL_RESULTS } from './types';
import { apiStart, apiEnd, apiError } from './api';

const setMovieList = (movieList) => {
    return {
        type: SET_MOVIE_LIST,
        payload: movieList,
    };
};

const setTotalPages = (totalPages) => {
    return {
        type: SET_TOTAL_PAGES,
        payload: totalPages,
    };
};

const setTotalResults = (totalResults) => {
    return {
        type: SET_TOTAL_RESULTS,
        payload: totalResults,
    };
};

export {
    apiStart,
    apiEnd,
    apiError,
    setMovieList,
    setTotalPages,
    setTotalResults,
};
