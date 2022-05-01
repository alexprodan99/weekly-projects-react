import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCorrectAnswers, setUserAnswer } from '../actions';
export default function QuestionCard({ questionDetails, questionIndex }) {
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState([]);
  const [colors, setColors] = useState({});
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
      <div className="question-text">{questionDetails.question}</div>

      <ul>
        {answers.map((item, index) => {
          return (
            <li
              key={index}
              onMouseEnter={() => {
                if (!userAnswer) {
                  const newColors = {};
                  for (let i = 0; i < answers.length; i++) {
                    newColors[i] = index === i ? '#0275d8' : '#ffffff';
                  }
                  setColors(newColors);
                }
              }}
              onMouseLeave={() => {
                setColors({ ...colors, [index]: '#ffffff' });
              }}
              style={{
                backgroundColor: !userAnswer
                  ? colors[index]
                  : userAnswer && correctAnswer === item
                  ? '#40b323'
                  : '#df1f06',
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
