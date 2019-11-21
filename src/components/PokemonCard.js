import React, { Component } from 'react'
import Pokemon from '../Pokemon'



export class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: null,
            loaded: false
        }
    }

    componentDidMount(){
        // this will make a new random pokemon when the component mounts, and set loaded to true
        const p = new Pokemon(Math.floor(Math.random() * 800) + 1)
        p.randomQuery().then((pokemon)=> this.setState({pokemon, loaded: true}))
    }

    render() {
        
        
        return (
            <div>
                {!this.state.loaded && <div>Loading Pokemon...</div>}

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
    zIndex: 3,
    backgroundColor: '#fff',
    width: '40%',
    height: '100vh',
    textAlign: 'center'
}

export default PokemonCard
