import React, { Component } from 'react'
import '../styles/pokemonCard.scss'

export class PokemonCard extends Component {


    render() {   
        return (
            <div>
                 <div style={cardStyle} onClick={this.props.onClick}>
                   <h1>{this.props.pokemon.name}</h1> 
                    <img src={this.props.pokemon.spriteURL} alt=""></img>
                    <p>HP: {this.props.pokemon.hp}</p>
                    <p>Attack: {this.props.pokemon.attack}</p>
                    <p>Defense: {this.props.pokemon.defense}</p>
                    <p>Weight: {this.props.pokemon.weight}</p>
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
    height: "100vh",
    textAlign: 'center'
}

export default PokemonCard
