import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ByCountryPage from './components/ByCountryPage'
import HomePage from './components/HomePage'
import WhatToDoPage from './components/WhatToDoPage'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/">
                    <Route path="" element={<HomePage />}></Route>
                    <Route path="country" element={<ByCountryPage />}></Route>
                    <Route path="what-to-do" element={<WhatToDoPage />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
