import { useState } from 'react';
import Tarjeta from './Tarjeta';

export default function GrupoTarjeta({datos, onGeneralClick}){
    // const [selectedCards, setSelectedCards] = useState([]);

    // // Función para manejar el clic de las cartas
    // const handleCardClick = (card) => {
    //     setSelectedCards([...selectedCards, card]);
        
    //     console.log('card', card);
    //     console.log('selectedCards', selectedCards);
    //     console.log('selectedCards.length', selectedCards.length);
    //     // Si se han seleccionado dos cartas, comprobar si son iguales
    //     if (selectedCards.length === 1) {
    //         // console.log('card.nombre', card.nombre);
    //         const [firstCard, secondCard] = selectedCards;
    //         // console.log('firstCard.nombre', firstCard.nombre);
    //         if (firstCard.nombre === card.nombre) {
    //             console.log('PAREJA ENCONTRADA');
    //             setSelectedCards([]);
    //             // Aquí puedes añadir lógica adicional para manejar la pareja encontrada
    //         } else {
    //             // Voltear las cartas si no son iguales después de un tiempo
    //             setSelectedCards([]);
    //         }
    //     }
    // };

    // const [idCard, setIdCard] = useState(0)

    // setIdCard(e.target.id)
    // console.log(e.target.id);
    // console.log('idCard', idCard);


    return (
        <div className="bg-slate-700 p-5">
            <div className="bg-slate-900 container mx-auto grid grid-cols-6 gap-4 p-10">
                {datos.map((tarjeta, index) => (
                    <Tarjeta 
                        key={index}
                        id={tarjeta.id} 
                        nombre={tarjeta.nombre} 
                        imagen={tarjeta.imagen} 
                        onGeneralClick={onGeneralClick}
                    />
                ))}
            </div>
        </div>
    );
}
