import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import MovieDetails from './common/components/MovieDetails';
import PageNotFound from './common/components/PageNotFound';

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route
                    path="/movie/:movieId"
                    element={<MovieDetails />}
                ></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
