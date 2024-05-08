import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GrupoTarjeta from "../components/GrupoTarjetas";
import { useAuth } from '../contexts/AuthContext';

export default function Juego() {
    const { puntuacion } = useAuth();
    const navigate = useNavigate()
    const [clicks, setClicks] = useState(0);
    const [time, setTime] = useState(20);
    const [pokemonAletorios, setPokemonsAleatorios] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try {
                const pokemons = []
                for(let i = 0; i < 9; i++) {
                    const random = Math.floor(Math.random() * 386)
                    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + random);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const data = await response.json();

                    pokemons.push({
                        id: null,
                        idPokemon: data.id,
                        nombre: data.name,
                        imagen: data.sprites.other['official-artwork'].front_default,
                        flipped: false,
                        matched: false,
                    })
                }
                
                
                // Duplicar las tarjetas y Ordenar aleatoriamente las tarjetas
                const pokemonRandom  = [...pokemons, ...pokemons].sort(() => Math.random() - 0.5).map((pokemon, index) => ({
                    ...pokemon,
                    id: index, 
                }));


                console.log('pokemonRandom', pokemonRandom);
                
                setPokemonsAleatorios(pokemonRandom);
            } catch (error) {
                console.error(error.message);
            } finally {
                console.log('Petición finalizada');
            }        
        }
        
        fetchData();
    }, []);

    const handleGeneralClick = () => {
        setClicks(clicks + 1);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
            } else if (time == 0) {
                // insertar datos de la partida una vez acabado el tiempo
                navigate('/partidas')
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [time]);


    return (
        <div className="bg-slate-700 h-screen">
            <div className='mx-auto'>
                <h1 className="text-3xl text-center text-white uppercase pt-6">Pokemons Memory</h1>
                <div className="container mx-auto flex space-x-5">
                    <div className="text-white bg-gray-800 rounded mt-4 px-4 py-2 w-fit">
                        Clics Generales ({clicks})
                    </div>
                    <div className="text-white bg-gray-800 rounded mt-4 px-4 py-2 w-fit">
                        Puntuacion {puntuacion}
                    </div>
                    <div className="text-white bg-gray-800 rounded mt-4 px-4 py-2 w-fit">
                        Tiempo {time}
                    </div>
                </div>
                <GrupoTarjeta datos={pokemonAletorios} onGeneralClick={handleGeneralClick} setPokemonsAleatorios={setPokemonsAleatorios} />
            </div>
        </div>
    )
}
