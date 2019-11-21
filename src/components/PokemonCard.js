import React, { Component } from 'react'
import Pokemon from '../Pokemon'

export class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: this.props.pokemon,
        }
    }
    render() {   
        return (
            <div>
                 <div style={cardStyle} onClick={this.props.onClick}>
                   <h1>{this.state.pokemon.name}</h1> 
                    <img src={this.state.pokemon.spriteURL} alt=""></img>
                    <p>HP: {this.state.pokemon.hp}</p>
                    <p>Attack: {this.state.pokemon.attack}</p>
                    <p>Defense: {this.state.pokemon.defense}</p>
                    <p>Weight: {this.state.pokemon.weight}</p>
                </div>

            </div>
        )
        
    }
}

const cardStyle = {
    position: 'absolute',
    zIndex: 3,
    backgroundColor: '#fff',
    width: '20%',
    height: 700,
    textAlign: 'center'
}

export default PokemonCard
