import {
    SET_GENRES_DICT,
    SET_MOVIE_LIST,
    SET_TOTAL_PAGES,
    SET_TOTAL_RESULTS,
} from './types';
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

const setGenresDict = (genresDict) => {
    return {
        type: SET_GENRES_DICT,
        payload: genresDict,
    };
};

export {
    apiStart,
    apiEnd,
    apiError,
    setMovieList,
    setTotalPages,
    setTotalResults,
    setGenresDict,
};
