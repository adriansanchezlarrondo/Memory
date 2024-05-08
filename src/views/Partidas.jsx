import { useState, useEffect } from "react";

export default function Partidas() {
    const [partidas, setPartidas] = useState([]);

    useEffect(() => {
        async function fetchPartidas(){
            try {
                console.log('');

                setPartidas(data);
            } catch (error) {
                console.error('Error al obtener las partidas:', error);
            }
        }

        fetchPartidas()
    }, [])

    return (
        <div className="bg-slate-700 h-screen">
            <h1 className="text-3xl text-center text-white uppercase pt-6">
                Tabla de Partidas
            </h1>

            <div className="container mx-auto p-5">
                <table className="border w-full text-white text-center">
                    <thead className="bg-zinc-600">
                        <tr>
                            <th className="p-3 border">Usuario</th>
                            <th className="p-3 border">Puntuación</th>
                            <th className="p-3 border">Clics</th>
                            <th className="p-3 border">Fecha</th>
                            <th className="p-3 border">Hora</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-500"> {/* bg-zinc-500 */}
                        <tr>
                            <td className="p-3 border">partida.usuario</td>
                            <td className="p-3 border">partida.puntuacion</td>
                            <td className="p-3 border">partida.clicks</td>
                            <td className="p-3 border">partida.fecha</td>
                            <td className="p-3 border">partida.hora</td>
                        </tr>
                        {/* {partidas.map(partida => (
                            <tr key={partida.id}>
                                <td>{partida.usuario}</td>
                                <td>{partida.puntuacion}</td>
                                <td>{partida.fecha}</td>
                                <td>{partida.hora}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
  