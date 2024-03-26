import { useState } from 'react';

export default function Tarjeta({ nombre, imagen, onGeneralClick }){
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);

        onGeneralClick();
    }

    return (
        <div className="rounded overflow-hidden shadow-lg bg-zinc-100 p-5 text-gray-700 text-center" onClick={handleClick}>
            <p className="pb-5 text-base">
                Clicks: {clicks}
            </p>
            <img className="mx-auto h-44" src={imagen} alt={nombre} /> 
            <div className="mt-4 text-xl">
                {nombre}
            </div>
        </div>
    );
}
