import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestionIndex, setQuestions } from '../actions';
export default function ResultsPage() {
  const dispatch = useDispatch();
  const correctAnswersCount = useSelector((state) => state.correctAnswersCount);
  useEffect(() => {
    dispatch(setQuestionIndex(0));
    dispatch(setQuestions([]));
  }, []);

  return <div>Your score is {correctAnswersCount}</div>;
}
