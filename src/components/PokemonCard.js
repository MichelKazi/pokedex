import React, { Component } from 'react'
import '../styles/pokemonCard.scss'
 

export class PokemonCard extends Component {
  
  render() {
    return (
      <div  id="pokemon">
        <h2>{this.props.pokemon.name.toUpperCase()}</h2>


        <img id="sprite" src={this.props.pokemon.spriteURL} alt="" />

        <div id="stats">
          <p id="hp">HP <br /> {this.props.pokemon.hp}</p>
          <p id="atk">ATK <br /> {this.props.pokemon.attack}</p>
          <p id="def">DEF <br/> {this.props.pokemon.defense}</p>
        </div>
        <ul id="abilities">
          {this.props.pokemon.abilities.map((ability, i) => (
            <li key={i++} className="ability">{ability}</li>
            ))}
        </ul>
        {!this.props.trainer.get(this.props.pokemon) && this.props.trainer.pokeballs!==0 && <div id="pokeball">
          <button id="catch" onClick={this.props.addToTrainer} type="submit"></button>
        </div>}

        { this.props.trainer.get(this.props.pokemon)==this.props.pokemon &&
          <div id="hasPokemon">
            <button onClick={this.props.equipToTrainer}>Equip</button>
          <button onClick={this.props.releaseFromTrainer}>Release</button>
          </div>
        }

        {this.props.trainer.pokeballs === 0 && <p>You're out of Pokéballs!</p>}
        <button id="close" onClick={this.props.dismiss} >Dismiss</button>
      </div>
    )
  }
}

export default PokemonCard
