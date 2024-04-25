import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const { logged, logout } = useAuth();

    // const [logged, setLogged] = useState(false);
    // const [email, setEmail] = useState('');

    // useEffect(() => {
    //     const loggedLS = localStorage.getItem('logged');
    //     setLogged(loggedLS === 'true');

    //     const fetchData = async () => {
    //         try {
    //             let { data, error } = await supabase
    //             .from('usuarios')
    //             .select('logged, email')
            
    //             if (error) {
    //                 console.error('Error al registrar usuario:', error.message);
    //                 return;
    //             }

    //             if (data.length > 0) {
    //                 setEmail(data[0].email);
    //                 setLogged(data[0].logged === 1);

    //                 // Guardar en localStorage
    //                 localStorage.setItem('logged', data[0].logged);
    //                 localStorage.setItem('email', data[0].email);
    //             }
    //         } catch (error) {
    //             console.error('Error general:', error.message);
    //         }
    //     };

    //     fetchData();
    // }, []);
    

    // async function handleLogOut(){
    //     try {
    //         const { data, error } = await supabase
    //         .from('usuarios')
    //         .update({ logged: false })
    //         .eq('email', email)
    //         .eq('logged', true)
    //         .select()

    //         if (error) {
    //             console.error('Error al registrar usuario:', error.message);
    //             return;
    //         }

    //         console.log('data', data);

    //         localStorage.removeItem('logged');
    //         localStorage.removeItem('email');

    //         setLogged(false);
    //         setEmail('');
    //     } catch (error) {
    //         console.error('Error general:', error.message);
    //     }
    // }

    return (
        <header className="bg-zinc-50 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <nav className='w-full'></nav>
                <nav className="w-full">
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
                                    <Link to="/acerca" className="border p-2 px-3 shadow-lg">A cerca de</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <nav className="w-full">
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
                            <li onClick={logout} >
                                <Link to="/login" className="border p-2 px-3 shadow-lg bg-zinc-600 text-white">Cerrar Sesión</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
