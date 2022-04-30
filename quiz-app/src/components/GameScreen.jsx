import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomGame, fetchQuickGame } from '../api';

export default function GameScreen() {
  const dispatch = useDispatch();
  const gameMode = useSelector((state) => state.gameMode);
  const difficulty = useSelector((state) => state.difficulty);
  const nrOfQuestions = useSelector((state) => state.nrOfQuestions);

  useEffect(() => {
    switch (gameMode) {
      case 'quick-game':
        dispatch(fetchQuickGame());
        break;
      case 'custom-game':
        dispatch(fetchCustomGame(difficulty, nrOfQuestions));
        break;
      default:
        break;
    }
  }, [gameMode, difficulty, nrOfQuestions]);
  return <div>GameScreen</div>;
}
