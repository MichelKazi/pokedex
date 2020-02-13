import React, { useState } from 'react'
import TrainerCard from './TrainerCard.js'
import '../styles/pokemonCard.scss'
import Trainer from '../Trainer.js'
import Pokemon from '../Pokemon.js';
import randomColor from 'randomcolor'
import Welcome from './Welcome.js'
import PokemonCard from './PokemonCard.js'
import PokeballMarker from './PokeballMarker.js'
import { Marker } from 'react-map-gl'


const Game = props => {
	const [trainer, setTrainer] = useState(null)
	const [pokemon, setPokemon] = useState(null)
	const [welcomeStyle] = useState({ backgroundColor: randomColor() })

	const initTrainer = (name, pokemon) => {
		const newTrainer = new Trainer(name)
		newTrainer.addPokemon(pokemon)
		setTrainer(newTrainer)
	}

	const addToTrainer = () => {
		const newTrainer = trainer
		newTrainer.addPokemon(pokemon)
		setTrainer(newTrainer)
		setPokemon(null)
	}

	const equipToTrainer = () => {
		const newTrainer = trainer
		newTrainer.equip(pokemon)
		setTrainer(newTrainer)
		setPokemon(null)
	}

	const releaseFromTrainer = () => {
		const newTrainer = trainer
		newTrainer.removePokemon(pokemon)
		setTrainer(trainer)
		setPokemon(null)
	}

	return (
		<>
			{props.navigatorChecked && props.locations && trainer && props.locations.map(({ lat, lng }, i) => (
				<Marker 
					key={i} 
					latitude={lat} 
					longitude={lng} 
					offsetLeft={-20} 
					offsetTop={-10} 
					style={{ zIndex: 21 }} 
					captureClick={false}>
					<PokeballMarker pokemon={pokemon} setPokemon={setPokemon} />
				</Marker>
			))}

			<>
				{!trainer && 
					<Welcome 
						style={welcomeStyle}
						initTrainer={initTrainer}
					/>	
				}
				
				{pokemon &&
					<div id="card"
						style={{backgroundColor: randomColor({hue: 'purple', luminosity: 'dark'})}}
					>
						<PokemonCard 
							dismiss={()=>setPokemon(null)}
							equipToTrainer={equipToTrainer}
							addToTrainer={addToTrainer}
							releaseFromTrainer={releaseFromTrainer}
							pokemon={pokemon}
						/>
					</div>
				}

				{trainer && 
					<TrainerCard
						setPokemon={setPokemon}
						trainer={trainer}
					/>
				}
			</>
		</>
	)
}

export default Game
