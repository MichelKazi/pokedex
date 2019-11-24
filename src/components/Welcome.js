import React, { Component } from 'react'
import Pokemon from '../Pokemon';
import '../styles/welcome.scss'

export class Welcome extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: null,
            showStarters: false,
            pokemon: null
        }
        this.setTrainer=this.setTrainer.bind(this)
        this.handleName=this.handleName.bind(this)

    }

    componentDidMount(){
        this.setState({starters: this.props.starters})
    }
    
    setTrainer(){
            if(this.state.pokemon)
                this.props.initTrainer(this.state.name, this.state.pokemon)
    }

    handleName(e){
        if (e.charCode === 13) {
            this.setState({showStarters: true})
            if (this.state.pokemon)
                this.props.initTrainer(this.state.name, this.state.pokemon)
        }
    }

    handleStarter(){

    }

    render() {
        return (
            <div id="welcome">
                <h2>Pokedex</h2>
                <input id='name-box' placeholder="Enter your name" onKeyPress={this.handleName} onChange={(e) => this.setState({ name: e.target.value })} />
                {this.state.showStarters && <div id="starters" >   
                <h3>Please select a starter pokemon</h3>
                    {this.props.starters.map((pokemon, i) => (
                        <div onClick={ ()=>{ this.setState({ pokemon }); this.setTrainer() } } key={i++} className="starters">
                            <img src={pokemon.spriteURL} alt=""></img>
                        </div>
                    ))}
                </div>}
            </div>
        )
    }
}

export default Welcome
