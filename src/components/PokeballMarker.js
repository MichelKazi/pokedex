import React, { Component } from 'react'

export class PokeballMarker extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
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
