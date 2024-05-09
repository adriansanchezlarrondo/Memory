import React, { createContext, useState, useContext } from 'react';
import { supabase } from '../supabase/Supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0)
  
  const login = () => {
    setLogged(true);
  };

  const logout = () => {
    setLogged(false);
  };

  const isLogged = async () => {
    try {
      let { data, error } = await supabase
      .from('usuarios')
      .select('logged')

      if (error) {
        console.error('Error al consultar logged:', error.message)
        return
      }

      setLogged(data[0].logged)
    } catch (error) {
      console.error('Ha surgido un error', error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ logged, login, logout, puntuacion, setPuntuacion, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
