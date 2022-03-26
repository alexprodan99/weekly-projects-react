// inspired by https://leanpub.com/redux-book
import axios from 'axios';
import { API } from '../actions/types';
import { accessDenied, apiError, apiStart, apiEnd } from '../actions/api';

const apiMiddleware =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        return new Promise((resolve, reject) => {
            if (!action) {
                return;
            }
            next(action);

            if (action.type !== API) return;

            const {
                url,
                method,
                data,
                accessToken,
                onSuccess,
                onFailure,
                nextDispatch,
                label,
                headers,
            } = action.payload;
            const dataOrParams = ['GET', 'DELETE'].includes(method)
                ? 'params'
                : 'data';

            // axios default configs
            axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';
            axios.defaults.headers.common['Content-Type'] = 'application/json';
            // Not necessary for current application
            // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

            if (label) {
                dispatch(apiStart(label));
            }

            axios
                .request({
                    url,
                    method,
                    headers,
                    [dataOrParams]: data,
                })
                .then(({ data }) => {
                    resolve(data);
                    dispatch(onSuccess(data));
                    if (nextDispatch) {
                        if (Array.isArray(data)) {
                            for (const item of data) {
                                dispatch(nextDispatch(data));
                            }
                        } else {
                            dispatch(nextDispatch(data));
                        }
                    }
                })
                .catch((error) => {
                    reject(error);
                    dispatch(apiError(error));
                    dispatch(onFailure(error));

                    if (error.response && error.response.status === 403) {
                        dispatch(accessDenied(window.location.pathname));
                    }
                })
                .finally(() => {
                    if (label) {
                        dispatch(apiEnd(label));
                    }
                });
        });
    };

export default apiMiddleware;
