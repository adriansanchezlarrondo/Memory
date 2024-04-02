import Tarjeta from './Tarjeta';

export default function GrupoTarjeta({datos, onGeneralClick}){

    return (
        <div className="bg-slate-700 p-5">
            <div className="bg-slate-900 container mx-auto grid grid-cols-6 gap-4 p-10">
                {datos.map((tarjeta, index) => (
                    <Tarjeta key={index} id={tarjeta.id} nombre={tarjeta.nombre} imagen={tarjeta.imagen} onGeneralClick={onGeneralClick}/>
                ))}
            </div>
        </div>
    );
}
