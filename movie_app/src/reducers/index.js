import {
    API_START,
    API_END,
    API_ERROR,
    SET_MOVIE_LIST,
    SET_TOTAL_PAGES,
    SET_TOTAL_RESULTS,
    SET_GENRES_DICT,
    SET_GENRES_DICT_REV,
    SET_SEARCH_TEXT,
    SET_SORTING_OPTION,
    SET_GENRE_OPTION,
    SET_PAGE,
    SET_MOVIE_DETAILS,
} from '../actions/types';

export default function (
    state = {
        sortingOption: 'popularity',
        genreOption: 'all',
        searchText: '',
        page: 1,
    },
    action
) {
    switch (action.type) {
        case API_START:
            if (action.payload === 'GET_POPULAR_MOVIES') {
                return { ...state, isLoadingMovies: true };
            }
            return state;
        case API_END:
            if (action.payload === 'GET_POPULAR_MOVIES') {
                return { ...state, isLoadingMovies: false, errorMsg: '' };
            }
            return state;
        case API_ERROR:
            return { ...state, errorMsg: action.payload };
        case SET_SEARCH_TEXT:
            return { ...state, searchText: action.payload };
        case SET_SORTING_OPTION:
            return { ...state, sortingOption: action.payload };
        case SET_GENRE_OPTION:
            return { ...state, genreOption: action.payload };
        case SET_PAGE:
            return { ...state, page: action.payload };
        case SET_MOVIE_LIST:
            return { ...state, movieList: action.payload };
        case SET_TOTAL_PAGES:
            return { ...state, totalPages: action.payload };
        case SET_TOTAL_RESULTS:
            return { ...state, totalResults: action.payload };
        case SET_GENRES_DICT:
            return { ...state, genresDict: action.payload };
        case SET_GENRES_DICT_REV:
            return { ...state, genresDictRev: action.payload };
        case SET_MOVIE_DETAILS:
            return { ...state, movieDetails: action.payload };
        default:
            return state;
    }
}
