import { useState, useEffect } from 'react';
import GrupoTarjeta from "../components/GrupoTarjetas";
// import { arrayPersonajes } from '../bd'

export default function Juego() {
    const [clicks, setClicks] = useState(0);
    const [pokemonAletorios, setPokemonsAleatorias] = useState([]);
    const pokemons = []

    const handleGeneralClick = () => {
        setClicks(clicks + 1);
    }

    useEffect(() => {
        async function fetchData(){
            try {
                for(let i = 0; i < 9; i++) {
                    const random = Math.floor(Math.random() * 1000)
                    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + random);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const data = await response.json();
                    pokemons.push({
                        nombre: data.name,
                        imagen: data.sprites.other['official-artwork'].front_default,
                    })
                }
                
                console.log('pokemons', pokemons);

                // Duplicar las tarjetas
                const duplicatedArrayPersonajes = [...pokemons, ...pokemons];
                
                // Ordenar aleatoriamente las tarjetas
                const pokemonRandom = duplicatedArrayPersonajes.sort(() => Math.random() - 0.5);
                console.log('pokemonRandom', pokemonRandom);
                
                setPokemonsAleatorias(pokemonRandom);
            } catch (error) {
                console.error(error.message);
            } finally {
                console.log('Petición finalizada');
            }        
        }
        fetchData();
        
    }, []);
  
    return (
        <div className="bg-slate-700 h-screen">
            <div className='mx-auto'>
                <h1 className="text-3xl text-center text-white uppercase pt-6">Pokemons Memory</h1>
                <div className="container mx-auto">
                    <button className="text-white bg-gray-800 px-4 py-2 rounded mt-4 ">
                        Clics Generales ({clicks})
                    </button>
                </div>
                <GrupoTarjeta datos={pokemonAletorios} onGeneralClick={handleGeneralClick}/>
            </div>
        </div>
    )
}
  