import React, { Component } from 'react'
import '../styles/trainerCard.scss'

export class TrainerCard extends Component {


  render() {
    const pokeballs =[]
    
    for (let i = 0; i < this.props.trainer.pokeballs; i++) {
      pokeballs.push(<img src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif" alt="" />)
    }
    
    return (
      <div id="trainerCard">
        <h2 id="name">Trainer {this.props.trainer.name}</h2>
        <div id="inventory">
          <div id="trainer">
            <img src="https://art.pixilart.com/2275c1b42ddf9d6.png" id="trainerSprite" alt="" />
            {this.props.trainer.equipped && <img id="equip" src={this.props.trainer.equipped.spriteURL} alt="" />}
          </div>
          <div id="slots">
            <div class="slot">  </div>
            <div class="slot">  </div>
            <div class="slot">  </div>
            <div class="slot">  </div>
          </div>

          {this.props.trainer && <div id="pokemonInSlot">
            { this.props.trainer.pokemonList.map((pokemon, i)=>(
              <img key={i++} src = { pokemon.spriteURL } alt = "" />
            )) }
          </div>}
  
          <div id="pokeballs">
            {pokeballs}
          </div>
        </div>
      </div>
    )
  }
}

export default TrainerCard
