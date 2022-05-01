import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuestionIndex, setQuestions } from '../actions';

const QuestionAnswers = ({ questionDetails, questionId, userAnswers }) => {
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');

  useEffect(() => {
    const possibleAnswers = [
      questionDetails.correct_answer,
      ...questionDetails.incorrect_answers,
    ];
    const shuffledAnswers = possibleAnswers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setAnswers(shuffledAnswers);
    setCorrectAnswer(questionDetails.correct_answer);
  }, []);

  return (
    <div className="question-answers">
      <ul>
        {answers.map((answer, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundColor:
                  answer === correctAnswer ? '#40b323' : '#df1f06',
              }}
            >
              {answer}
            </li>
          );
        })}
      </ul>
      <div className="user-answer">
        Your answer:{' '}
        {userAnswers[questionId] ? userAnswers[questionId] : 'None'}{' '}
        {userAnswers[questionId] === questionDetails.correct_answer ? (
          <i className="bi bi-lightning-fill"></i>
        ) : (
          <i className="bi bi-x-circle-fill"></i>
        )}
      </div>
    </div>
  );
};

export default function ResultsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const correctAnswersCount = useSelector((state) => state.correctAnswersCount);
  const gameMode = useSelector((state) => state.gameMode);
  const questions = useSelector((state) => state.questions);
  const userAnswers = useSelector((state) => state.userAnswers);

  useEffect(() => {
    dispatch(setQuestionIndex(0));
  }, []);

  return (
    <div className="quiz-report">
      <i
        className="bi bi-house-fill go-dashboard"
        onClick={() => navigate('/')}
      ></i>
      <h2>{gameMode === 'quick-game' ? 'Quick Game' : 'Custom Game'}</h2>
      <h2> Your score is {correctAnswersCount}</h2>

      <ol>
        {questions.map((question, index) => {
          return (
            <li key={index} className="question">
              <div className="question-text">{question.question}</div>

              <QuestionAnswers
                questionDetails={question}
                questionId={index}
                userAnswers={userAnswers}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
