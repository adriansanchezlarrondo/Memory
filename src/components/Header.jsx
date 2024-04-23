import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import Juego from '../views/Juego';
import Acerca from '../views/Acerca';
import Login from '../views/Login';
import Registro from '../views/Registro';

export default function Header() {
    return (
        <Router>
            <div>
                <header className="bg-zinc-50 py-4">
                    <div className="container mx-auto flex items-center justify-between">
                        <nav className='w-full'></nav>
                        <nav className="w-full">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link to="/" className="border p-2 px-3 shadow-lg">Home</Link>
                                </li>
                                <li>
                                    <Link to="/pokemonMemory" className="border p-2 px-3 shadow-lg">Pokemon Memory</Link>
                                </li>
                                <li>
                                    <Link to="/marvelMemory" className="border p-2 px-3 shadow-lg">Marvel Memory</Link>
                                </li>
                                <li>
                                    <Link to="/acerca" className="border p-2 px-3 shadow-lg">A cerca de</Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className="w-full">
                            <ul className="flex justify-end space-x-4">
                                <li>
                                    <Link to="/login" className="border p-2 px-3 shadow-lg bg-zinc-600 text-white">Login</Link>
                                </li>
                                <li>
                                    <Link to="/registro" className="border p-2 px-3 shadow-lg bg-zinc-600 text-white">Sign Up</Link>
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>
            </div>
        </Router>
    );
}
