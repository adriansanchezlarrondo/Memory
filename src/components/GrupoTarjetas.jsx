import { useState } from 'react';
import Tarjeta from './Tarjeta';

export default function GrupoTarjeta({ datos, onGeneralClick, setPokemonsAleatorios }) {
    const [idPokemon, setIdPokemon] = useState(0);
    const [tarjetasVolteadas, setTarjetasVolteadas] = useState([]);

    const handleCardClick = (e) => {
        // Verificar si la tarjeta ya está volteada o si ya hay dos tarjetas volteadas
        if (tarjetasVolteadas.length === 2 || tarjetasVolteadas.includes(parseInt(e.target.id))) {
            setTarjetasVolteadas([])
            return;
        }

        const idClick = parseInt(e.target.id)
        const clickedPokemon = datos.find(pokemon => pokemon.id === idClick)
    
        if (clickedPokemon) {
            const nuevosDatos = datos.map(pokemon => {
                if (idClick === pokemon.id) {
                    return {
                        ...pokemon,
                        flipped: true
                    };
                }
                return pokemon
            });

            // Verificar si hay una coincidencia después de voltear esta tarjeta
            if (tarjetasVolteadas.length === 1) {
                const primeraTarjetaId = tarjetasVolteadas[0];
                const primeraTarjetaPokemon = datos.find(pokemon => pokemon.id === primeraTarjetaId)
                
                if (primeraTarjetaPokemon.nombre === clickedPokemon.nombre) {   // PAREJA ENCONTRADA
                    console.log('pareja encontrada')
                    setTarjetasVolteadas([])
                } else {    // PAREJA EQUIVOCADA
                    setTimeout(() => {
                        const resetPokemons = nuevosDatos.map(pokemon => ({
                            ...pokemon,
                            flipped: false
                        }))
                        setPokemonsAleatorios(resetPokemons)
                        setTarjetasVolteadas([])
                    }, 1000)
                }
            }
    
            // Actualizar el estado de las tarjetas volteadas solo después de verificar la coincidencia
            setPokemonsAleatorios(nuevosDatos)
            setIdPokemon(clickedPokemon.id)
            setTarjetasVolteadas([...tarjetasVolteadas, idClick])
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
                        onClick={(e) => handleCardClick(e)}
                    />
                ))}
            </div>
        </div>
    );
}
