import axiosClient from '../common/api/AxiosClient';
import {
    apiStart,
    apiEnd,
    apiError,
    setMovieList,
    setTotalPages,
    setTotalResults,
    setGenresDict,
} from '../actions';

const getPopularMovies = () => {
    return function (dispatch) {
        dispatch(apiStart('GET_POPULAR_MOVIES'));
        return axiosClient.get('movie/popular').then(
            ({ data }) => {
                dispatch(setMovieList(data.results));
                dispatch(setTotalPages(data.total_pages));
                dispatch(setTotalResults(data.total_results));
                dispatch(apiEnd('GET_POPULAR_MOVIES'));
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
                for (const genreItem of data.genres) {
                    genresDict[genreItem.id] = genreItem.name;
                }
                dispatch(setGenresDict(genresDict));
                dispatch(apiEnd('GET_MOVIES_GENRES'));
            },
            (error) => {
                const message = error.message;
                dispatch(apiError(message));
            }
        );
    };
};

export { getPopularMovies, getMoviesGenres };
