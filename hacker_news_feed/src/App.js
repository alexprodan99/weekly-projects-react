import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getFetchResults } from './actions/index';
function App() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFetchResults('foo'));
    }, []);

    console.log(state);
    return <div>{ state.isLoadingData ? "Loading..." : state.data ? state.data.nbHits : "" }</div>;
}

export default App;
