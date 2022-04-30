import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setGameMode } from '../actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="dashboard-card">
        <h2 className="dashboard-title">Quizzy</h2>
        <div className="dashboard-desc">
          Do you like quizzes ? Join the quiz game and see how you perform!
        </div>
        <img src="/src/static/img/questions.svg" />
        <div className="dashboard-buttons">
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={() => {
              dispatch(setGameMode('quick-game'));
              navigate('/game');
            }}
          >
            Quick Game
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              dispatch(setGameMode('custom-game'));
              navigate('/game');
            }}
          >
            Custom Game
          </button>
        </div>
      </div>
    </div>
  );
}
