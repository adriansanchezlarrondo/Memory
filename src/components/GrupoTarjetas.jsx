import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Tarjeta from './Tarjeta'

export default function GrupoTarjeta({ datos, onGeneralClick }) {
    const { puntuacion, setPuntuacion } = useAuth() // contexto

    const [clickedPokemon, setClickedPokemon] = useState(null)
    const [tarjetasVolteadas, setTarjetasVolteadas] = useState([])
    const [parejas, setParejas] = useState([])
    
    const handleCardClick = (e) => {        
        // Verificar si la tarjeta ya está volteada o si ya hay dos tarjetas volteadas
        if (tarjetasVolteadas.length === 2 || tarjetasVolteadas.includes(parseInt(e.target.id))) {
            setTarjetasVolteadas([])
            return
        }

        const idClick = parseInt(e.target.id)

        if (clickedPokemon === null) {
            const primerPokemon = datos.find(pokemon => pokemon.id === idClick)
            primerPokemon.flipped = true

            setClickedPokemon(idClick)
        } else {
            const segundoPokemon = datos.find(pokemon => pokemon.id === idClick)
            segundoPokemon.flipped = true

            setTarjetasVolteadas([...tarjetasVolteadas, clickedPokemon, idClick])

            const primerTarjeta = datos.find(pokemon => pokemon.id === clickedPokemon)
            const segundoTarjeta = datos.find(pokemon => pokemon.id === idClick)
    
            if (primerTarjeta.idPokemon === segundoTarjeta.idPokemon) {
                setParejas([...parejas, clickedPokemon, idClick])
                setPuntuacion(puntuacion + 10)
            } else {
                setTimeout(() => {
                    primerTarjeta.flipped = false
                    segundoTarjeta.flipped = false
                }, 800) 
            }
    
            setClickedPokemon(null)
        }

        onGeneralClick()
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
    )
}
