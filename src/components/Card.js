import React, { Component } from 'react'
import '../styles/pokemonCard.scss'
import TrainerCard from './TrainerCard'
import PokemonCard from './PokemonCard'

export class Card extends Component {
 constructor(props) {
   super(props);
   
   this.setTrainer=this.setTrainer.bind(this)
 }
 

  setTrainer() {
    const trainer = this.props.trainer
    trainer.addPokemon(this.props.pokemon)
    this.props.addPokemonHandler(trainer)
  }


  render() {
    return (
      <div>

        {!this.props.pokemon && <div id="no-card">
          <h2>Welcome!</h2>
          <img src="http://pixelartmaker.com/art/dc12aa356cb08f1.png" width="150" alt=""></img>
          <h3>Click on a pokeball and find out what's in it!</h3>
        </div>}

        {this.props.pokemon && <div id="card" >

          <PokemonCard setTrainer={this.setTrainer} trainer={this.props.trainer} pokemon={this.props.pokemon}/>
          
          <TrainerCard trainer={this.props.trainer}/>
          
        </div>}
      </div>
    )

  }
}

export default Card
