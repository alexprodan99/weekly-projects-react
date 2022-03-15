import React, { useEffect } from 'react'
import './App.css'
import BarChart from './common/components/BarChart'


function App() {
    const data = [
        { x_axis: 'baba', y_axis: 20, color: 'green' },
        { x_axis: 'caca', y_axis: 30, color: 'yellow' },
    ]
    return (
        <div>
            <BarChart width={600} height={400} data={data} />
        </div>
    )
}

export default App
