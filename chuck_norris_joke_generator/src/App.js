import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    getRandomJoke,
    getCategories,
    getJokeByCategory,
    searchJoke,
} from './api';
import Dashboard from './components/Dashboard';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRandomJoke());
        dispatch(getCategories());
        dispatch(getJokeByCategory('animal'));
        dispatch(searchJoke('aaa'));
    }, []);
    return (
        <div>
            <Dashboard />
        </div>
    );
}

export default App;
