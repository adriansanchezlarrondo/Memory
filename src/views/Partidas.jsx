import { useState, useEffect } from "react";
import { supabase } from "../supabase/Supabase";

export default function Partidas() {
    const [partidas, setPartidas] = useState([]);

    useEffect(() => {
        async function fetchPartidas(){
            try {
                let { data, error } = await supabase
                .from('partidas')
                .select('*')

                if (error) {
                    console.error('Error al iniciar usuario:', error.message)
                    return
                }
              
                setPartidas(data)
            } catch (error) {
                console.error('Error al obtener las partidas:', error);
            }
        }

        fetchPartidas()
    }, [])

    const formatHora = (hora) => {
        return hora ? hora.substr(0, 8) : ''
    };
    
    const formatDate = (date) => {
        return date ? date.substr(0, 10) : ''
    };

    return (
        <div className="bg-slate-700 h-screen">
            <h1 className="text-3xl text-center text-white uppercase pt-6">
                Tabla de Partidas
            </h1>

            <div className="container mx-auto p-5">
                <table className="w-full text-white text-center">
                    <thead className="bg-zinc-700">
                        <tr>
                            <th className="p-4 border">Usuario</th>
                            <th className="p-4 border">Puntuación</th>
                            <th className="p-4 border">Clics</th>
                            <th className="p-4 border">Fecha</th>
                            <th className="p-4 border">Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partidas.map(partida => {
                            if(partida.id % 2 == 0){
                                return (
                                    <tr className="bg-slate-500" key={partida.id}>
                                        <td className="p-4 border">{partida.name}</td>
                                        <td className="p-4 border">{partida.points}</td>
                                        <td className="p-4 border">{partida.clics}</td>
                                        <td className="p-4 border">{formatDate(partida.created_at)}</td>
                                        <td className="p-4 border">{formatHora(partida.hora)}</td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr className="bg-zinc-500" key={partida.id}>
                                        <td className="p-4 border">{partida.name}</td>
                                        <td className="p-4 border">{partida.points}</td>
                                        <td className="p-4 border">{partida.clics}</td>
                                        <td className="p-4 border">{formatDate(partida.created_at)}</td>
                                        <td className="p-4 border">{formatHora(partida.hora)}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
  