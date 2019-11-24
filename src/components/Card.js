import React, { Component } from 'react'
import '../styles/pokemonCard.scss'
import TrainerCard from './TrainerCard'
import PokemonCard from './PokemonCard'

export class Card extends Component {
 
  render() {
    return (
      <div>

        {!this.props.pokemon && <div id="no-card">
          <h2>Welcome!</h2>
          <img src="http://pixelartmaker.com/art/dc12aa356cb08f1.png" width="150" alt=""></img>
          <h3>Click on a pokeball and find out what's in it!</h3>
        </div>}

        {this.props.pokemon && <div id="card" >

          <PokemonCard addPokemonhandler={this.props.sendToTrainer} trainer={this.props.trainer} pokemon={this.props.pokemon}/>
          
          <TrainerCard trainer={this.props.trainer}/>
          
        </div>}
      </div>
    )

  }
}

export default Card
