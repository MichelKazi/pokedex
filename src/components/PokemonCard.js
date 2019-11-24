import React, { Component } from 'react'
import '../styles/pokemonCard.scss'
import Trainer from '../Trainer'
 

export class PokemonCard extends Component {

  render() {
    return (
      <div id="pokemon">
        <h2>{this.props.pokemon.name.toUpperCase()}</h2>


        <img id="sprite" src={this.props.pokemon.spriteURL} alt="" />

        <div id="stats">
          <p id="hp">HP <br /> {this.props.pokemon.hp}</p>
          <p id="atk">ATK <br /> {this.props.pokemon.attack}</p>
          <p id="def">DEF <br/> {this.props.pokemon.defense}</p>
        </div>
        <ul id="abilities">
          {this.props.pokemon.abilities.map((ability) => (
            <li className="ability">{ability}</li>
          ))}
        </ul>
        <p id="btncaption">Catch Me!</p>
        <div id="pokeball">
          <button id="catch" onClick={this.props.setTrainer} type="submit"></button>
        </div>
      </div>
    )
  }
}

export default PokemonCard
