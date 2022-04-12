import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Menu() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="menu-card">
                <button
                    type="button"
                    className="btn btn-primary mr-5"
                    onClick={() => navigate('/name')}
                >
                    START NEW GAME
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => navigate('/top-score')}
                >
                    TOP SCORE
                </button>
            </div>
        </div>
    );
}
