import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import PokemonPage from './components/PokemonPage';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonPage />}></Route>
          <Route path="/home" element={<PokemonPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
