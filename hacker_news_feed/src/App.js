import React, { useEffect } from 'react';
import './App.css';
import { getSearchResults } from './api/news-api';

function App() {
    useEffect(() => {
        getSearchResults('foo').then((results) => {
            console.log(results);
        });
    }, []);
    return <div></div>;
}

export default App;
