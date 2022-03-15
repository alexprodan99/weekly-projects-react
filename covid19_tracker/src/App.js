import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import BarChart from './common/components/BarChart'


function App() {
    const data = [
        { x_axis: 'baba', y_axis: 20, color: 'green' },
        { x_axis: 'caca', y_axis: 30, color: 'yellow' },
    ]
    return (
        <div>
            <Routes>
                <Route path='/'>
                </Route>
            </Routes>
        </div>
    )
}

export default App
