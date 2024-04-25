import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import { AuthProvider } from "./contexts/AuthContext"
import Acerca from "./views/Acerca"
import Home from "./views/Home"
import Juego from "./views/Juego"
import Login from "./views/Login"
import Registro from "./views/Registro"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemonMemory" element={<Juego />} />
          <Route path="/marvelMemory" element={<Juego />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
