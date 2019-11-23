import React, { Component } from 'react'
import '../styles/pokemonCard.scss'

export class PokemonCard extends Component {


  render() {
    return (
      <div>

        {!this.props.pokemon && <div id="no-card">
          <h2>Welcome!</h2>
          <img src="http://pixelartmaker.com/art/dc12aa356cb08f1.png" width="150" alt=""></img>
          <h3>Click on a pokeball and find out what's in it!</h3>
        </div>}

        {this.props.pokemon && <div id="card" >


          <h2 id="name">{this.props.pokemon.name}</h2>
          <img id="sprite" src={this.props.pokemon.spriteURL} alt=""></img>
          <p id="hp">HP<br></br>{this.props.pokemon.hp}</p>
          <p id="atk">Attack<br></br>{this.props.pokemon.attack}</p>
          <p id="def">Defense<br></br>{this.props.pokemon.defense}</p>
          <p id="weight">Weight<br></br>{this.props.pokemon.weight}</p>
          <div id="abilities">
            {this.props.pokemon.abilities.map((ability) => (
              <p className="ability">{ability}</p>
            ))}

          </div>
        </div>}
      </div>
    )

  }
}

export default PokemonCard
