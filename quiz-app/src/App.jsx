import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from './api';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch().then(result => {
      console.log(result);
    })
  }, []);

  return <div className="app"></div>;
}

export default App;
