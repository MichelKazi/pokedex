import React, { Component } from 'react'
import Trainer from '../Trainer'

const trainer = new Trainer('Michel')
trainer.addPokemon(Math.floor(Math.random() * 800) + 1)

export class PokemonCard extends Component {
    render() {
        let p = trainer.pokemonList[0]
        return (
            <div style = {cardStyle} onClick={this.props.onClick}>
               <h1>{p.name}</h1> 
                <img src={p.spriteURL} alt=""></img>
                <p>HP: {p.stats.hp}</p>
                <p>Attack: {p.stats.attack}</p>
                <p>Defense: {p.stats.defense}</p>
                <p>Weight: {p.stats.weight}</p>
            </div>
        )
    }
}

const cardStyle = {
    zIndex: 3,
    backgroundColor: '#fff',
    width: '40%',
    height: '100%',
    textAlign: 'center'
}

export default PokemonCard
