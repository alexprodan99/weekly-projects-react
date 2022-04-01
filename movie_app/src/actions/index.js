import {
    SET_GENRES_DICT,
    SET_GENRES_DICT_REV,
    SET_GENRE_OPTION,
    SET_MOVIE_LIST,
    SET_PAGE,
    SET_SEARCH_TEXT,
    SET_SORTING_OPTION,
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

const setGenresDictRev = (genresDictRev) => {
    return {
        type: SET_GENRES_DICT_REV,
        payload: genresDictRev,
    };
};

const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText,
    };
};

const setSortingOption = (sortingOption) => {
    return {
        type: SET_SORTING_OPTION,
        payload: sortingOption,
    };
};

const setGenreOption = (genreOption) => {
    return {
        type: SET_GENRE_OPTION,
        payload: genreOption,
    };
};

const setPage = (pageNr) => {
    return {
        type: SET_PAGE,
        payload: pageNr,
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
    setGenresDictRev,
    setSearchText,
    setSortingOption,
    setGenreOption,
    setPage,
};
