import React, { Component } from 'react'
import '../styles/pokemonCard.scss'
import TrainerCard from './TrainerCard'
import PokemonCard from './PokemonCard'
import Welcome from './Welcome';
import Trainer from '../Trainer';
import randomColor from 'randomcolor'

export class Card extends Component {
 constructor(props) {
   super(props);
   
  this.state = {
    welcomeStyle: {
      backgroundColor: randomColor()
    },
    showTrainer: false
  }
  
   this.addToTrainer=this.addToTrainer.bind(this)
   this.initTrainer=this.initTrainer.bind(this)
   this.setPokemon=this.setPokemon.bind(this)
   this.releaseFromTrainer=this.releaseFromTrainer.bind(this)
   this.equipToTrainer=this.equipToTrainer.bind(this)
 }
 
  initTrainer(name, pokemon) {
    const trainer = new Trainer(name)
    trainer.addPokemon(pokemon)
    this.props.trainerHandler(trainer)
    this.setState({showTrainer: true})
  }

  addToTrainer() {
    const trainer = this.props.trainer
    trainer.addPokemon(this.props.pokemon)
    this.props.trainerHandler(trainer)
    this.props.clearPokemon()
  }

  equipToTrainer(){
    const trainer = this.props.trainer
    trainer.equip(this.props.pokemon)
    this.props.trainerHandler(trainer)
    this.props.clearPokemon()
  }

  releaseFromTrainer(){
    const trainer = this.props.trainer
    trainer.removePokemon(this.props.pokemon)
    this.props.trainerHandler(trainer)
    this.props.clearPokemon()
  }

  setPokemon(pokemon){
    this.props.pokemonHandler(pokemon)
  }
  
  

  render() {
    return (
      <div>

        {!this.props.trainer && <Welcome style={this.state.welcomeStyle} starters={this.props.starters} initTrainer={this.initTrainer} trainer={this.props.trainer} pokemon={this.props.pokemon} />}

        {this.props.pokemon && <div id="card" >

          <PokemonCard dismiss={this.props.clearPokemon} 
          equipToTrainer={this.equipToTrainer} 
          addToTrainer={this.addToTrainer} 
          releaseFromTrainer={this.releaseFromTrainer}
          trainer={this.props.trainer} 
          pokemon={this.props.pokemon}/>
        </div>}

        {this.state.showTrainer && <TrainerCard setPokemon={this.setPokemon} trainer={this.props.trainer}/>}
      </div>
    )

  }
}

export default Card
