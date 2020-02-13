import React, { useState } from 'react'
import TrainerCard from './TrainerCard.js'
import '../styles/pokemonCard.scss'

const Card = props => {
	const [ trainerExists, setTrainerExists ] = useState(false)

	return (
		<>
			{trainerExists && 
				<TrainerCard
					setPokemon={this.setPokemon}
					trainer={props.trainer}
				/>
			}
		</>
	)
}
