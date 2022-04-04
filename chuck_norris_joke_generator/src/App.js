import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    getRandomJoke,
    getCategories,
    getJokeByCategory,
    searchJoke,
} from './api';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRandomJoke());
        dispatch(getCategories());
        dispatch(getJokeByCategory('animal'));
        dispatch(searchJoke('aaa'));
    }, []);
    return <div></div>;
}

export default App;
