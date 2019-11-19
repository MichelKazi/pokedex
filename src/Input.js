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
                <button onSubmit={() => this.props.onSubmit(this.state.name)}> </button>
            </>
        )
    }
}

export default Input
