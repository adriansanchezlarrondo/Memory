import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const { logged, logout, isLogged } = useAuth();

    isLogged()

    return (
        <header className="bg-zinc-50 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <nav></nav>
                <nav className="flex justify-center">
                    <ul className="flex space-x-4">
                        {logged  && (
                            <>
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
                                    <Link to="/partidas" className="border p-2 px-3 shadow-lg">Tabla Partidas</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <nav className="flex justify-end">
                    <ul className="flex justify-end space-x-4">
                        {!logged  ? (
                            <>
                                <li>
                                    <Link to="/login" className="border p-2 px-3 shadow-lg bg-zinc-600 text-white">Login</Link>
                                </li>
                                <li>
                                    <Link to="/registro" className="border p-2 px-3 shadow-lg bg-zinc-600 text-white">Sign Up</Link>
                                </li>
                            </>
                        ) : (
                            <li onClick={logout()} >
                                <Link to="/login" className="border p-2 px-3 shadow-lg bg-zinc-600 text-white">Cerrar Sesión</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
