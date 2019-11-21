import React, { Component } from 'react'
import Pokemon from '../Pokemon'

export class PokeballMarker extends Component {
  constructor(props){
    super(props)
    this.setPokemon=this.setPokemon.bind(this)
  }


  setPokemon() {
    const p = this.state.pokemon ? Promise.resolve(this.state.pokemon) : _ => {
      const fetchedPokemon = new Pokemon();
      const pokemon = fetchedPokemon.randomQuery()
      return this.setState({ pokemon })
    }

    p.then(pokemon => {
      this.props.pokemonHandler(pokemon)
    })
  }

  render() {
    return (
      <div onClick={this.props.onClick} style={{ cursor: 'pointer' }}>
        <img src="https://image.flaticon.com/icons/png/512/188/188918.png" width="24" alt="pokeball" />
      </div>
    )
  }
}

export default PokeballMarker
