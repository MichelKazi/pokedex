import React, { useState, Component } from 'react'
import Pokemon from '../Pokemon'

export class pokeballMarker extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: null
    }

    this.setPokemon=this.setPokemon.bind(this)
  }


  setPokemon() {
  }

}

const PokeballMarker = props => {

	const resolvePokemon = () => {

    const p = props.pokemon ? () => Promise.resolve(props.pokemon) : _ => {
      const fetchedPokemon = new Pokemon();
      return fetchedPokemon.randomQuery().then(pokemon => {this.setState({ pokemon }); return pokemon})
    }

    p().then(pokemon => {
      props.setPokemon(pokemon)
    })
	}

	return (
		<div 
			onClick={resolvePokemon} 
			style={{ cursor: 'pointer' }}>
			<img src="https://image.flaticon.com/icons/png/512/188/188918.png" width="24" alt="pokeball" />
		</div>
	)
}

export default PokeballMarker
