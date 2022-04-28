import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuickGame, fetchCustomGame } from './api';

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCustomGame('easy', 10)).then(() => {
  //   });
  // }, []);

  return <div className="app"></div>;
}

export default App;
