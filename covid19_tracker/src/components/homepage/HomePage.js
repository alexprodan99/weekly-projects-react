import React, { useEffect, useState } from 'react'
import './HomePage.css';
import { getRequest } from '../../common/api/BasicApi'
import BarChart from '../../common/components/BarChart'
import { generateRgbColor } from '../../common/utils/generators'

export default function HomePage() {
    const [data, setData] = useState([])
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
                        color: generateRgbColor(key, [100,200,0])
                    })
                }
                setData(newData)
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
    }, [])
    return (
        <div>
            { error && <div className='alert alert-danger'> { error }</div> }
            <div className="page-content">
                <img className="background-image" src="images/corona_virus.png"/>
                <center className="overlay">
                    <BarChart width={800} height={600} data={data} />
                </center>
            </div>
            
        </div>
    )
}
