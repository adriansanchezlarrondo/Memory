import { useState } from 'react';
import Tarjeta from './Tarjeta';

export default function GrupoTarjeta({ datos, onGeneralClick, setPokemonsAleatorios }) {
    const [idPokemon, setIdPokemon] = useState(0);
    const [tarjetasVolteadas, setTarjetasVolteadas] = useState([]);

    const handleCardClick = (e) => {
        const idClick = parseInt(e.target.id);
    
        // Verificar si la tarjeta ya está volteada o si ya hay dos tarjetas volteadas
        if (tarjetasVolteadas.length === 2 || tarjetasVolteadas.includes(idClick)) {
            return; // No hacer nada si ya hay dos tarjetas volteadas o si esta tarjeta ya está volteada
        }
    
        const clickedPokemon = datos.find(pokemon => pokemon.id === idClick);
    
        if (clickedPokemon) {
            const nuevosDatos = datos.map(pokemon => {
                if (pokemon.id === idClick) {
                    return {
                        ...pokemon,
                        flipped: true
                    };
                }
                return pokemon;
            });
    
            // Verificar si hay una coincidencia después de voltear esta tarjeta
            if (tarjetasVolteadas.length === 1) {
                const primeraTarjetaId = tarjetasVolteadas[0];
                const primeraTarjetaPokemon = datos.find(pokemon => pokemon.id === primeraTarjetaId);
                if (primeraTarjetaPokemon.nombre === clickedPokemon.nombre) {
                    // Coinciden, puedes ejecutar la lógica adicional aquí
                } else {
                    // No coinciden, voltear ambas tarjetas de vuelta después de un breve período
                    setTimeout(() => {
                        const resetPokemons = nuevosDatos.map(pokemon => ({
                            ...pokemon,
                            flipped: false
                        }));
                        setPokemonsAleatorios(resetPokemons);
                        setTarjetasVolteadas([]);
                    }, 1000);
                }
            }
    
            // Actualizar el estado de las tarjetas volteadas solo después de verificar la coincidencia
            setPokemonsAleatorios(nuevosDatos);
            setIdPokemon(clickedPokemon);
            setTarjetasVolteadas([...tarjetasVolteadas, idClick]);
        }
    
        onGeneralClick();
    }
    
    return (
        <div className="bg-slate-700 p-5">
            <div className="bg-slate-900 container mx-auto grid grid-cols-6 gap-4 p-10">
                {datos.map((pokemon, index) => (
                    <Tarjeta
                        key={index}
                        id={pokemon.id}
                        nombre={pokemon.nombre}
                        imagen={pokemon.imagen}
                        flipped={pokemon.flipped}
                        matched={pokemon.matched}
                        onClick={(e) => handleCardClick(e)}
                    />
                ))}
            </div>
        </div>
    );
}
