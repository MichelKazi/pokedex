import React, { Component } from 'react'
import Trainer from '../Trainer'
import '../styles/trainerCard.scss'

export class TrainerCard extends Component {
  render() {
    return (
        <div id="trainerCard">
          <div id="trainerInfo">
            <input id="searchbar" type="text" placeholder="Search.."></input>
          <img id="trainerSprite" src="http://rs921.pbsrc.com/albums/ad60/moonlit-sonnet0/Animation%20and%20Comics/Pokemon/Players/Female/FRLG_Leaf_Intro.png~c200" alt=""></img>
                <img id="pokemonSprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt=""></img>
                  <ul id="stat"><li>HP</li><li>DEF</li><li>ATK</li></ul>
                  <button id="btn" type="submit">Remove this Pokemon</button>
      </div>

                <div id="inventory">
                  <div class="pokemon"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt=""></img></div>
                    <div class="pokemon"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png" alt=""></img></div>
                      <div class="pokemon"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png" alt=""></img></div>
                        <div class="pokemon"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""></img></div>

                          <div class="pokeball"><img src="https://toppng.com/public/uploads/thumbnail/okeball-8-bit-pokeball-11563350337zmenfgykkl.png" alt=""></img></div>
                            <div class="pokeball"><img src="https://toppng.com/public/uploads/thumbnail/okeball-8-bit-pokeball-11563350337zmenfgykkl.png" alt=""></img></div>
                              <div class="pokeball"><img src="https://toppng.com/public/uploads/thumbnail/okeball-8-bit-pokeball-11563350337zmenfgykkl.png" alt=""></img></div>
                                <div class="pokeball"><img src="https://toppng.com/public/uploads/thumbnail/okeball-8-bit-pokeball-11563350337zmenfgykkl.png" alt=""></img></div>

                                </div>
                              </div>
                            
                            )
                        }
                    }
                    
                    export default TrainerCard
