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

   this.setTrainer=this.setTrainer.bind(this)
   this.initTrainer=this.initTrainer.bind(this)
 }
 
  initTrainer(name, pokemon) {
    const trainer = new Trainer(name)
    trainer.addPokemon(pokemon)
    this.props.trainerHandler(trainer)
    this.setState({showTrainer: true})
  }

  setTrainer() {
    const trainer = this.props.trainer
    trainer.addPokemon(this.props.pokemon)
    this.props.trainerHandler(trainer)
  }


  render() {
    return (
      <div>

        {!this.props.trainer && <Welcome style={this.state.welcomeStyle} starters={this.props.starters} initTrainer={this.initTrainer} trainer={this.props.trainer} pokemon={this.props.pokemon} />}

        {this.props.pokemon && <div id="card" >

          <PokemonCard setTrainer={this.setTrainer} trainer={this.props.trainer} pokemon={this.props.pokemon}/>
        </div>}

        {this.state.showTrainer && <TrainerCard trainer={this.props.trainer}/>}
      </div>
    )

  }
}

export default Card
