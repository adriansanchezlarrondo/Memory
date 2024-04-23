import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/Supabase';

export default function Login(){
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        console.log('Correo:', correo);
        console.log('Contraseña:', contraseña);

        let { data: usuarios, error } = await supabase
        .from('usuarios')
        .select('correo')

        console.log('usuarios', usuarios);
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
