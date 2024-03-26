import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import Juego from '../views/Juego';
import Acerca from '../views/Acerca';

export default function Header() {
    return (
        <Router>
            <div>
                <header className="bg-zinc-50 py-4">
                    <div className="container mx-auto items-center">
                        <nav className="flex justify-center">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link to="/" className="border p-2 shadow-lg">Home</Link>
                                </li>
                                <li>
                                    <Link to="/pokemonMemory" className="border p-2 shadow-lg">Pokemon Memory</Link>
                                </li>
                                <li>
                                    <Link to="/marvelMemory" className="border p-2 shadow-lg">Marvel Memory</Link>
                                </li>
                                <li>
                                    <Link to="/acerca" className="border p-2 shadow-lg">A cerca de</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemonMemory" element={<Juego />} />
                    <Route path="/marvelMemory" element={<Juego />} />
                    <Route path="/acerca" element={<Acerca />} />
                </Routes>
            </div>
        </Router>
    );
}
