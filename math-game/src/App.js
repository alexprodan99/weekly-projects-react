import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import Menu from './components/Menu';
import TopScore from './components/TopScore';
import UserDetails from './components/UserDetails';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/game" element={<GameScreen />} />
                <Route path="/name" element={<UserDetails />} />
                <Route path="/top-score" element={<TopScore />} />
            </Routes>
        </div>
    );
}

export default App;
