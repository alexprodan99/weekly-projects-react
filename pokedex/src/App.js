import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PokemonDetail from './components/PokemonDetail'
import PokemonPage from './components/PokemonPage'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/">
                    <Route path="" element={<PokemonPage />}></Route>
                    <Route path="home" element={<PokemonPage />}></Route>
                    <Route path="pokemons">
                        <Route path="" element={<PokemonPage />}></Route>
                        <Route path=":name" element={<PokemonDetail />}></Route>
                    </Route>
                </Route>

                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>Page Not Found!</p>
                        </main>
                    }
                ></Route>
            </Routes>
        </div>
    )
}

export default App
