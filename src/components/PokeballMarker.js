import React, { Component } from 'react'
import Pokemon from '../Pokemon'

export class PokeballMarker extends Component {
    componentDidMount() {
        // this will make a new random pokemon when the component mounts, and set loaded to true
        const p = new Pokemon(Math.floor(Math.random() * 800) + 1)
        p.randomQuery().then((pokemon) => this.setState({ pokemon, loaded: true })) // this logic works on a promise, hence I call it on a method
    }
    render() {
        return (
            <div onClick={this.props.onClick} style={{ cursor: 'pointer' }}>
                <img src="https://image.flaticon.com/icons/png/512/188/188918.png" width="24" alt="pokeball"/>
            </div>
        )
    }
}

export default PokeballMarker
