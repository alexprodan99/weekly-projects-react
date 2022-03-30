import {
    API_START,
    API_END,
    API_ERROR,
    SET_MOVIE_LIST,
    SET_TOTAL_PAGES,
    SET_TOTAL_RESULTS,
    SET_GENRES_DICT,
} from '../actions/types';

export default function (state = {}, action) {
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
        case SET_MOVIE_LIST:
            return { ...state, movieList: action.payload };
        case SET_TOTAL_PAGES:
            return { ...state, totalPages: action.payload };
        case SET_TOTAL_RESULTS:
            return { ...state, totalResults: action.payload };
        case SET_GENRES_DICT:
            return { ...state, genresDict: action.payload };
        default:
            return state;
    }
}
