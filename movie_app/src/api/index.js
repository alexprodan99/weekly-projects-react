import axiosClient from '../common/api/AxiosClient';
import {
    apiStart,
    apiEnd,
    apiError,
    setMovieList,
    setTotalPages,
    setTotalResults,
    setGenresDict,
    setGenresDictRev,
} from '../actions';

const filterMovies = (sortBy, genre, page = 1) => {
    return function (dispatch, getState) {
        const state = getState();
        const genresDictRev = state.genresDictRev;
        const genreId = genresDictRev[genre];
        dispatch(apiStart('FILTER_MOVIES'));
        return axiosClient
            .get(
                `discover/movie?sort_by=${sortBy}.desc&${
                    genreId ? `with_genres=${genreId}&` : ''
                }page=${page}`
            )
            .then(
                ({ data }) => {
                    dispatch(setMovieList(data.results));
                    dispatch(setTotalPages(data.total_pages));
                    dispatch(setTotalResults(data.total_results));
                    dispatch(apiEnd('FILTER_MOVIES'));
                },
                (error) => {
                    const message = error.message;
                    dispatch(apiError(message));
                }
            );
    };
};

const searchMovies = (query, page = 1) => {
    return function (dispatch) {
        dispatch(apiStart('SEARCH_MOVIES'));
        return axiosClient.get(`search/movie?query=${query}&page=${page}`).then(
            ({ data }) => {
                dispatch(setMovieList(data.results));
                dispatch(setTotalPages(data.total_pages));
                dispatch(setTotalResults(data.total_results));
                dispatch(apiEnd('SEARCH_MOVIES'));
            },
            (error) => {
                const message = error.message;
                dispatch(apiError(message));
            }
        );
    };
};
const getMoviesGenres = () => {
    return function (dispatch) {
        dispatch(apiStart('GET_MOVIES_GENRES'));
        return axiosClient.get('genre/movie/list').then(
            ({ data }) => {
                const genresDict = {};
                const genresDictRev = {};
                for (const genreItem of data.genres) {
                    genresDict[genreItem.id] = genreItem.name.toLowerCase();
                    genresDictRev[genreItem.name.toLowerCase()] = genreItem.id;
                }
                dispatch(setGenresDict(genresDict));
                dispatch(setGenresDictRev(genresDictRev));
                dispatch(apiEnd('GET_MOVIES_GENRES'));
            },
            (error) => {
                const message = error.message;
                dispatch(apiError(message));
            }
        );
    };
};

export { searchMovies, filterMovies, getMoviesGenres };
