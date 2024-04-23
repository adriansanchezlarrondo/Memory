import { useState } from 'react';

export default function Tarjeta({ id, nombre, imagen, onGeneralClick }){
    const [clicks, setClicks] = useState(0);
    const [girada, setGirada] = useState(false);

    const handleClick = () => {
        if (!girada) {
            setClicks(clicks + 1);
            setGirada(true);
            onGeneralClick();
        }
    }

    
    return (
        <div id={id} className={`rounded overflow-hidden shadow-lg bg-zinc-100 p-5 text-gray-700 text-center h-[304px] ${girada ? '' : 'girando'}`} onClick={handleClick} >
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
