import { useState } from 'react';

export default function Tarjeta({ id, nombre, imagen, onGeneralClick, onCardClick }){
    const [clicks, setClicks] = useState(0);
    const [girada, setGirada] = useState(false);
    // const [pokemonID, setPokemonID] = useState(null);

    const handleClick = () => {
        // cambiar la manera en la que gira ahora.
        if (!girada) {
            setClicks(clicks + 1);
            setGirada(true);
            onGeneralClick();
            onCardClick({ id, nombre });
        }

        // setClicks(clicks + 1);
        // setGirada(!girada); // Cambia el estado de girada al contrario
        // onGeneralClick();

        // // Verificar si ya hay una carta seleccionada
        // if (pokemonID !== null) {
        //     // Comparar los IDs de las dos cartas
        //     if (pokemonID === id) {
        //         console.log('pokemonID', pokemonID);
        //         console.log('id', id);
        //         console.log('PAREJA ENCONTRADA');
        //         // Si los IDs son iguales, significa que las cartas forman un par y limpiar pokemonID 
        //         // Llamar a la posible función para manejar el par encontrado
        //         // id = null
        //         setPokemonID(null);
        //     } else {
        //         // Si los IDs son diferentes, reiniciar la carta seleccionada previamente
        //         setTimeout(() => {
        //             setGirada(!girada); // Voltear las cartas nuevamente después de un tiempo
        //         }, 1000);
        //     }
        // } else {
        //     // Si no hay ninguna carta seleccionada, almacenar el ID de la carta actual
        //     setPokemonID(id);
        // }
        
    }

    return (
        <div className={`rounded overflow-hidden shadow-lg bg-zinc-100 p-5 text-gray-700 text-center h-[304px] ${girada ? '' : 'girando'}`} onClick={handleClick} >
            {girada && (
                <>
                    <p className="pb-5 text-base">Clicks: {clicks}</p>
                    <img className="mx-auto h-44" src={imagen} alt={nombre} /> 
                    <div className="mt-4 text-xl">{nombre}</div>
                </>
            )}
        </div>
    );
}
