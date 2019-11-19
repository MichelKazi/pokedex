import React, { Component } from 'react'

export class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null
        }
    }
    render() {
        return (
            <>
                <input id='name-box' onChange={(e) => this.setState({name: e.target.value })} />
                <button id = "submit-btn" onClick={() => this.props.onSubmit(this.state.name)}>Enter</button>
            </>
        )
    }
}

export default Input
