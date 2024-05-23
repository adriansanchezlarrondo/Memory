import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/Supabase';
import { useAuth } from '../contexts/AuthContext';

export default function Login(){
    const navigate = useNavigate();
    const { login } = useAuth(); // contexto

    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
  
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (correo != '' && contraseña != ''){
                let { data: usuarios, error } = await supabase.auth.signInWithPassword({
                    email: correo,
                    password: contraseña,
                })
                
                if (error) {
                    console.error('Error al iniciar usuario:', error.message);
                    return;
                }
    
                const { data: dataLogin, error: errorLogin } = await supabase
                .from('usuarios')
                .update({ logged: true })
                .eq('email', correo)
                .select()
    
                if (errorLogin) {
                    console.error('Error al iniciar usuario:', errorLogin.message);
                    return;
                }
    
                login()
                navigate('/pokemonMemory');
            } else {
                alert('Introduce valores en el inicio de sesión')
            }
        } catch (error) {
            console.error('Error general:', error.message);
        }
    };
  
    return (
        <div className="bg-slate-700 h-screen">
            <h1 className='text-3xl text-center text-white uppercase pt-6'>Login</h1>
            <div className="max-w-md mx-auto mt-8">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                            Correo Electrónico
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="correo"
                        type="email"
                        placeholder="Correo Electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Link to="/registro" className='text-blue-500'>¿No estás registrado?</Link>
                        <button
                        className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
