import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import axiosClient from './common/api/AxiosClient';

function App() {
    useEffect(() => {
        axiosClient.get('movie/popular').then((result) => {
            console.log(result);
        });
    }, []);
    return (
        <div>
            <Routes></Routes>
        </div>
    );
}

export default App;
