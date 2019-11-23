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


          <div id="pokemon">
            <h2 id="name">{this.props.pokemon.name.toUpperCase()}</h2>
            <div id="info">
              <div id="col1">
                <img id="sprite" src={this.props.pokemon.spriteURL} alt=""/>
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

            <button id="catch" type="submit">Catch me!</button>

          </div>
          <div id="trainer">

          </div>
          
        </div>}
      </div>
    )

  }
}

export default PokemonCard
