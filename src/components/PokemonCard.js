import React, { Component } from 'react'
import Pokemon from '../Pokemon'

export class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: null,
            loaded: false
        }

        //bind this keyword
        this.setPokemon=this.setPokemon.bind(this)
    }

    setPokemon() {
        const p = this.state.pokemon ? Promise.resolve(this.state.pokemon) :  _ => {
            const fetchedPokemon = new Pokemon();
            const pokemon = fetchedPokemon.randomQuery()
            return this.setState({ pokemon })
    }

        p.then(pokemon => {
            this.props.handlerFromMap(pokemon)
        })
    }

    render() {
        
        
        return (
            <div>
                {!this.state.loaded && <div style={cardStyle}>Loading Pokemon...</div>}

                {this.state.loaded && <div style={cardStyle} onClick={this.props.onClick}>
                   <h1>{this.state.pokemon.name}</h1> 
                    <img src={this.state.pokemon.spriteURL} alt=""></img>
                    <p>HP: {this.state.pokemon.hp}</p>
                    <p>Attack: {this.state.pokemon.attack}</p>
                    <p>Defense: {this.state.pokemon.defense}</p>
                    <p>Weight: {this.state.pokemon.weight}</p>
                </div>}

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
