import axios from 'axios';
import {
    apiEnd,
    apiError,
    apiStart,
    setCategories,
    setJoke,
    setJokeList,
} from '../actions';
const BASE_URL = 'https://api.chucknorris.io/jokes';

const getRandomJoke = () => (dispatch) => {
    dispatch(apiStart('GET_RANDOM_JOKE'));
    return axios.get(`${BASE_URL}/random`).then(
        ({ data }) => {
            dispatch(
                setJoke({
                    text: data.value,
                })
            );

            dispatch(apiEnd('GET_RANDOM_JOKE'));
        },
        (error) => {
            const message = error.message;
            dispatch(apiError(message));
        }
    );
};

const getJokeByCategory = (category) => (dispatch) => {
    dispatch(apiStart('GET_JOKE_BY_CATEGORY'));
    return axios.get(`${BASE_URL}/random?category=${category}`).then(
        ({ data }) => {
            dispatch(
                setJoke({
                    text: data.value,
                })
            );
            dispatch(apiEnd('GET_JOKE_BY_CATEGORY'));
        },
        (error) => {
            const message = error.message;
            dispatch(apiError(message));
        }
    );
};

const searchJoke = (query) => (dispatch) => {
    dispatch(apiStart('SEARCH_JOKE'));
    return axios.get(`${BASE_URL}/search?query=${query}`).then(
        ({ data }) => {
            const jokeData = data.result;
            const jokeList = jokeData.map((item) => {
                return {
                    text: item.value,
                };
            });

            dispatch(setJokeList(jokeList));
            dispatch(apiEnd('SEARCH_JOKE'));
        },
        (error) => {
            const message = error.message;
            dispatch(apiError(message));
        }
    );
};

const getCategories = () => (dispatch) => {
    dispatch(apiStart('GET_CATEGORIES'));
    return axios.get(`${BASE_URL}/categories`).then(
        ({ data }) => {
            const categories = Object.values(data);
            dispatch(setCategories(categories));
            dispatch(apiEnd('GET_CATEGORIES'));
        },
        (error) => {
            const message = error.message;
            dispatch(apiError(message));
        }
    );
};

export { getRandomJoke, getJokeByCategory, getCategories, searchJoke };
