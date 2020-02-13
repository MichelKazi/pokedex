import React, { useState } from 'react'
import TrainerCard from './TrainerCard.js'
import '../styles/pokemonCard.scss'
import Trainer from '../Trainer.js'
import randomColor from 'randomcolor'
import Welcome from './Welcome.js'
import PokemonCard from './PokemonCard.js'
import PokeballMarker from './PokeballMarker.js'
import { Marker } from 'react-map-gl'

const Game = props => {
	const [trainer, setTrainer] = useState(null)
	const [pokemon, setPokemon] = useState(null)
	const [welcomeStyle] = useState({ backgroundColor: randomColor() })

	const trainerHandler = (trainer) => {
		setTrainer(trainer)
	}

	const pokemonHandler = (pokemon) => {
		setPokemon(pokemon)
	}

	const clearPokemon = () => {
		setPokemon(null)
	}

	return (
		<>
			{props.navigatorChecked && props.locations && trainer && props.locations.map(({ lat, lng }, i) => (
				<Marker key={i} 
					latitude={lat} 
					longitude={lng} 
					offsetLeft={-20} 
					offsetTop={-10} 
					style={{ zIndex: 21 }} 
					captureClick={false}>
					<PokeballMarker pokemonHandler={pokemonHandler} />
				</Marker>
			))}
			<>
			</>
		</>
	)
}

export default Game
