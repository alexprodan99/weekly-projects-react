import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import QuestionCard from './QuestionCard';
import { setQuestionIndex } from '../actions';

export default function GameScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.questionIndex);
  const correctAnswersCount = useSelector((state) => state.correctAnswersCount);

  return (
    <>
      {questions.length && questionIndex < questions.length ? (
        <div className="game-screen">
          <div className="game-screen-content">
            <i
              className="bi bi-house-fill go-dashboard"
              onClick={() => navigate('/')}
            ></i>
            <h2 className="correct-answers">
              Correct: {correctAnswersCount}/{questions.length}
            </h2>
            <div className="game-question">
              <QuestionCard
                questionDetails={questions[questionIndex]}
                questionIndex={questionIndex}
              />
            </div>
            <div className="game-buttons">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => dispatch(setQuestionIndex(questionIndex + 1))}
              >
                {questionIndex !== questions.length - 1
                  ? 'Next Question'
                  : 'Go to report'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/results" />
      )}
    </>
  );
}
