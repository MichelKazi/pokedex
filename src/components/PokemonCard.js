import React, { Component } from 'react'
import '../styles/pokemonCard.scss'

export class PokemonCard extends Component {


    render() {   
        return (
            <div>
                {!this.props.pokemon && <div id="no-card">
                    <h1>Welcome!</h1>
                    <img src="http://pixelartmaker.com/art/dc12aa356cb08f1.png" width="150" alt=""></img> 
                    <h2>Click on a pokeball and find out what's in it!</h2>   
                </div>}

                {this.props.pokemon && <div id="card" >
                   <h1>{this.props.pokemon.name}</h1> 
                    <img src={this.props.pokemon.spriteURL} alt=""></img>
                    <p>HP: {this.props.pokemon.hp}</p>
                    <p>Attack: {this.props.pokemon.attack}</p>
                    <p>Defense: {this.props.pokemon.defense}</p>
                    <p>Weight: {this.props.pokemon.weight}</p>
                </div>}
            </div>
        )
        
    }
}

export default PokemonCard
