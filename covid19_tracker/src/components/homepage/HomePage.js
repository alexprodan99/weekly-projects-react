import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { getRequest } from '../../common/api/BasicApi'
import BarChart from '../../common/components/BarChart'
import { generateRgbColor } from '../../common/utils/generators'

export default function HomePage() {
    const [data, setData] = useState([])
    const [stats, setStats] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        getRequest('total')
            .then((result) => {
                const resultData = result.data.data
                const newData = []
                for (const key of Object.keys(resultData)) {
                    newData.push({
                        x_axis: key,
                        y_axis: resultData[key],
                        color: generateRgbColor(key, [100, 200, 0]),
                    })
                }
                setData(newData)
                setStats(resultData)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }, [])
    return (
        <div>
            {error && <div className="alert alert-danger"> {error}</div>}
            <div className="page-content">
                <div className="overlay">
                    <div className="page-title">Current World Stats</div>
                    <div className="covid-world-details">
                        <ul>
                            {Object.keys(stats).map((item, index) => {
                                return (
                                    <li key={index}>
                                        {' '}
                                        {item}:{stats[item]}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <BarChart width={800} height={800} data={data} />
                </div>
                <img
                    className="background-image"
                    src="images/corona_virus.png"
                />
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}
