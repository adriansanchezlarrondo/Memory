import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/Supabase';

export default function Registro(){
    const navigate = useNavigate();
    
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
  
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            // Aquí puedes manejar la lógica para enviar los datos del formulario
            console.log('Nombre:', nombre);
            console.log('Correo:', correo);
            console.log('Contraseña:', contraseña);

            let { data, error } = await supabase.auth.signUp({
                email: correo,
                password: contraseña
            })
            
            if (error) {
                console.error('Error al registrar usuario:', error.message);
                return;
            }

            console.log('data', data.user.id);
    
            // const { data: usuariosDB, error: dbError } = await supabase
            // .from('usuarios')
            // .insert([
            //     {
            //         nombre: nombre, 
            //         email: correo, 
            //         user_id: data.user.id
            //     },
            // ]);
        
            // if (dbError) {
            //     console.error('Error al insertar usuario en la base de datos:', dbError.message);
            //     return;
            // }
            
            // navigate('/login')
        } catch (error) {
            console.error('Error general:', error.message);
        }
    };
  
    return (
        <div className="bg-slate-700 h-screen">
            <h1 className='text-3xl text-center text-white uppercase pt-6'>Registro</h1>
            <div className="max-w-md mx-auto mt-8">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            Nombre
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
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
                    <div className="flex items-center justify-end">
                        <button
                        className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
