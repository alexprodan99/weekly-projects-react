import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './common/components/Navbar';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './components/front_page/FrontPage';
import NewStoriesPage from './components/new_stories_page/NewStoriesPage';
import AskStoriesPage from './components/ask_stories_page/AskStoriesPage';
import ShowStoriesPage from './components/show_stories_page/ShowStoriesPage';
import Modal from './common/components/Modal';

function App() {
    const modalData = useSelector((state) => state.modalData);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<FrontPage />}></Route>
                <Route path="/new" element={<NewStoriesPage />}></Route>
                <Route path="/ask" element={<AskStoriesPage />}></Route>
                <Route path="/show" element={<ShowStoriesPage />}></Route>
            </Routes>
            {modalData ? (
                <Modal
                    title={modalData.title}
                    text={modalData.text}
                    comments={modalData.comments}
                />
            ) : (
                ''
            )}
        </div>
    );
}

export default App;
