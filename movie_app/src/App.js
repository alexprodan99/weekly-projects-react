import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
            </Routes>
        </div>
    );
}

export default App;
