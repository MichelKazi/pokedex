import React, { Component } from 'react'
import '../styles/pokemonCard.scss'
import Trainer from '../Trainer'
 

export class PokemonCard extends Component {
  constructor(props){
    super(props)

  }
  

  render() {
    return (
      <div id="pokemon">
        <h2 id="name">{this.props.pokemon.name.toUpperCase()}</h2>
        <div id="info">
          <div id="col1">
            <img id="sprite" src={this.props.pokemon.spriteURL} alt="" />
          </div>
          <div id="col2">
            <p id="hp">HP: {this.props.pokemon.hp}</p>
            <p id="atk">ATK: {this.props.pokemon.attack}</p>
            <p id="def">DEF: {this.props.pokemon.defense}</p>
            <ul id="abilities">
              {this.props.pokemon.abilities.map((ability) => (
                <li className="ability">{ability}</li>
              ))}
            </ul>
          </div>
        </div>
        <button id="catch" onClick={this.sendToTrainer} type="submit">Catch me!</button>

      </div>
    )
  }
}

export default PokemonCard
