import React, { useState } from 'react'
import Pokemon from '../Pokemon';
import '../styles/welcome.scss'
import randomColor from 'randomcolor'

const bulbasaur = new Pokemon()
const charmander = new Pokemon()
const squirtle = new Pokemon()
bulbasaur.queryData(1)
charmander.queryData(4)
squirtle.queryData(7)
const starters = [charmander, bulbasaur, squirtle]
const color = randomColor({hue: 'pink' , luminosity: 'dark'})

const Welcome = (props) => {

	const [name, setName] = useState(null)	
	const [showStarters, setShowStarters] = useState(false)

	const handleName = (e) => {
		if (e.charCode === 13) {
			setShowStarters(true)
		}
	}

	return (
		<div style={ {backgroundColor: color} } id="welcome">
			<h2>Pokedex</h2>
			<img 
				height="200" 
				src="https://thumbs.gfycat.com/MarriedJampackedDorking-max-1mb.gif" 
				alt=""
			/>
			{showStarters && 
			<>
				<h3 id="message" >Please select a starter pokemon</h3>
				<div id="starters" >   
					{starters.map((pokemon, i) => (
						<div 
							key={i} 
							className="starters">
							<img 
								id={pokemon.name} 
								onClick={() => { props.initTrainer(name, pokemon) }} 
								src={pokemon.spriteURL} 
								alt={pokemon.name}
							/>
						</div>
					))}
				</div>
			</>}

			<div id="name">
				{!showStarters && 
				<input 
					id='name-box' placeholder="Enter your name" 
					onKeyPress={handleName} 
					onChange={(e) => setName(e.target.value)} />
				}
			</div>
		</div>
	)

} 

export default Welcome
