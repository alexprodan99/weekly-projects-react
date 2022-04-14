import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopScore() {
    const navigate = useNavigate();
    const [scoreList, setScoreList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    useEffect(() => {
        fetch('http://localhost:8000/highscore', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                setScoreList(result);
                setErrorMsg('');
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }, []);

    return (
        <div className="container">
            <div className="top-score-wrapper">
                {errorMsg && (
                    <div className="alert alert-danger">{errorMsg}</div>
                )}
                <button
                    type="button"
                    className="btn btn-primary mx-auto top-score back-btn"
                    onClick={() => navigate('/')}
                >
                    Back to main menu
                </button>
                <h2>HighScore</h2>
                {scoreList.map((item, index) => {
                    return (
                        <div key={index} className="score-item">
                            {index + 1}. {item.username} - {item.score} points
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TopScore;
