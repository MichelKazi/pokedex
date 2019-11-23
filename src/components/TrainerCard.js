import React, { Component } from 'react'
import Trainer from '../Trainer'
import '../styles/trainerCard.scss'

export class TrainerCard extends Component {
  render() {
    return (
      <div id="trainer">
        <h2 id="name">Trainer Michel</h2>
        <div id="info">
          <div id="col1">
            <img src="https://art.pixilart.com/2275c1b42ddf9d6.png" id="trainerSprite" alt="" />
          </div>
          <div id="col2">
            <img id="equip" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" alt="" />
          </div>
          <div id="col3">
            <div id="slots">
              <div class="slot">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" />
              </div>
              <div class="slot">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />
              </div>
              <div class="slot">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" />
              </div>
              <div class="slot">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrainerCard
