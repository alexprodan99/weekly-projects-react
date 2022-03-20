import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CovidDetails from './common/components/CovidDetails';
import NavBar from './common/components/NavBar';
import ByCountryPage from './components/by_country_page/ByCountryPage';
import HomePage from './components/homepage/HomePage';
import WhatToDoPage from './components/what_to_do_page/WhatToDoPage';

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/">
                    <Route path="" element={<HomePage />}></Route>
                    <Route path="country" element={<ByCountryPage />}></Route>
                    <Route path="what-to-do" element={<WhatToDoPage />}></Route>
                </Route>
            </Routes>
            <CovidDetails style={{ position: 'absolute' }} />
        </div>
    );
}

export default App;
