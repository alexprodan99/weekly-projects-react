import React from 'react';
import './App.css';
import Navbar from './common/components/Navbar';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/front_page/FrontPage';
import NewStoriesPage from './components/new_stories_page/NewStoriesPage';
import AskStoriesPage from './components/ask_stories_page/AskStoriesPage';
import ShowStoriesPage from './components/show_stories_page/ShowStoriesPage';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<FrontPage />}></Route>
                <Route path="/new" element={<NewStoriesPage />}></Route>
                <Route path="/ask" element={<AskStoriesPage />}></Route>
                <Route path="/show" element={<ShowStoriesPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
