import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getFetchResults } from './actions/index';
import Navbar from './common/components/Navbar';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/front_page/FrontPage';
import NewStoriesPage from './components/new_stories_page/NewStoriesPage';
import AskStoriesPage from './components/ask_stories_page/AskStoriesPage';
import ShowStoriesPage from './components/show_stories_page/ShowStoriesPage';

function App() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFetchResults('foo'));
    }, []);

    console.log(state);
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<FrontPage />}></Route>
                <Route path="/new" element={<NewStoriesPage />}></Route>
                <Route path="/ask" element={<AskStoriesPage />}></Route>
                <Route path="/show" element={<ShowStoriesPage />}></Route>
            </Routes>
            {state.isLoadingData
                ? 'Loading...'
                : state.data
                ? state.data.nbHits
                : ''}
        </div>
    );
}

export default App;
