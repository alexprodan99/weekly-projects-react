import { setMovieList, setTotalPages, setTotalResults } from '../actions';
import { apiEnd, apiError, apiStart } from '../actions/api';
import axiosClient from '../common/api/AxiosClient';

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

export { getPopularMovies };
