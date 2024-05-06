import { useState } from 'react';

export default function Tarjeta({ id, nombre, imagen, flipped, matched, onClick }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = (e) => {
        if (!flipped && !matched) {
            setClicks(clicks + 1);
            onClick(e);
        }
    }

    return (
        <div id={id} className={`rounded overflow-hidden shadow-lg bg-zinc-100 p-5 text-gray-700 text-center h-[304px] ${flipped ? '' : 'girando'}`} onClick={(e) => handleClick(e)} >
            {flipped && (
                <>
                    <p className="pb-5 text-base">Clicks: {clicks}</p>
                    <img className="mx-auto h-44" src={imagen} alt={nombre} />
                    <div className="mt-4 text-xl">{nombre}</div>
                </>
            )}
        </div>
    );
}
