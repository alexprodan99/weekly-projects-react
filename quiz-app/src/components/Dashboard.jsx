import React, { useEffect } from 'react';
import { fetchQuickGame } from '../api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  resetCorrectAnswers,
  resetUserAnswers,
  setGameMode,
  setQuestionIndex,
  setQuestions,
} from '../actions';
import CustomGameModal from './CustomGameModal';

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setQuestionIndex(0));
    dispatch(resetCorrectAnswers());
    dispatch(setQuestions([]));
    dispatch(resetUserAnswers());
  }, []);

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
              dispatch(fetchQuickGame()).then(() => {
                navigate('/game');
              });
            }}
          >
            Quick Game
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-toggle="modal"
            data-target="#modal"
            data-backdrop="static"
            onClick={() => dispatch(setGameMode('custom-game'))}
          >
            Custom Game
          </button>
        </div>
      </div>
      <CustomGameModal />
    </div>
  );
}
