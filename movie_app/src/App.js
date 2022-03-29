import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { getPopularMovies } from './api';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const totalResults = useSelector((state) => state.totalResults);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPopularMovies());
    }, []);
    return (
        <div>
            {totalResults}
            <Routes></Routes>
        </div>
    );
}

export default App;
