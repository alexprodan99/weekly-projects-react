import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCorrectAnswers, setUserAnswer } from '../actions';
export default function QuestionCard({ questionDetails, questionIndex }) {
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const userAnswer = useSelector((state) => state.userAnswers[questionIndex]);

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
  }, [questionDetails, questionIndex]);

  return (
    <div className="question-card">
      <div>{questionDetails.question}</div>

      <ul>
        {answers.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundColor: !userAnswer
                  ? 'rgb(255,255,255)'
                  : userAnswer && correctAnswer === item
                  ? 'rgb(64, 179, 35)'
                  : 'rgb(223, 31, 6)',
              }}
              onClick={() => {
                if (!userAnswer) {
                  dispatch(setUserAnswer(item));
                  if (correctAnswer === item) {
                    dispatch(incrementCorrectAnswers());
                  }
                }
              }}
            >
              {' '}
              <input
                type="radio"
                value={item}
                id={`radio${index}`}
                name="radio"
              />{' '}
              <label htmlFor={`radio${index}`}>{item}</label>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
