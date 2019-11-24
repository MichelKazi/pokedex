import React, { Component } from 'react'
import Trainer from '../Trainer'
import '../styles/trainerCard.scss'

export class TrainerCard extends Component {


  render() {
    return (
      <div id="trainer">
        <h2 id="name">Trainer {this.props.trainer.name}</h2>
        <div id="info">
          <div id="col1">
            <img src="https://art.pixilart.com/2275c1b42ddf9d6.png" id="trainerSprite" alt="" />
          </div>
          <div id="col2">
            {this.props.trainer.equipped && <img id="equip" src={this.props.trainer.equipped.spriteURL} alt="" />}
          </div>
          <div id="col3">
            <div id="slots">
              {this.props.trainer.pokemonList.map((pokemon) => (
                <div className="slot"> {pokemon && <img src={pokemon.spriteURL} alt="" />} </div>
              ))} 
                   
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrainerCard
