import React, { Component } from 'react'
import Pokemon from '../Pokemon'



export class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    render() {
        let p = new Pokemon(Math.floor(Math.random() * 800) + 1)
        
        
        return (
            <div style = {cardStyle} onClick={this.props.onClick}>
               <h1>{p.name}</h1> 
                <img src={p.spriteURL} alt=""></img>
                <p>HP: {p.hp}</p>
                <p>Attack: {p.attack}</p>
                <p>Defense: {p.defense}</p>
                <p>Weight: {p.weight}</p>
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
