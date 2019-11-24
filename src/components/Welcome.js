import React, { Component } from 'react'
import Pokemon from '../Pokemon';
import '../styles/welcome.scss'
import randomColor from 'randomcolor'

const color = randomColor({hue: 'pink' , luminosity: 'dark'})
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
        this.setStarter=this.setStarter.bind(this)
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

    setStarter(pokemon){
        this.setState({ pokemon })
        this.setTrainer()
    }

   
    render() {
        return (
            <div style={ {backgroundColor: color} } id="welcome">
                <h2>Pokedex</h2>
                <img height="200" src="https://thumbs.gfycat.com/MarriedJampackedDorking-max-1mb.gif" alt=""></img>
                {this.state.showStarters && 
                < >
                    <h3 id="message" >Please select a starter pokemon</h3>
                    <div id="starters" >   
                        {this.props.starters.map((pokemon, i) => (
                            <div key={i++} className="starters">
                                <img id={pokemon.name} onClick={() => { this.setState({ pokemon }); this.setTrainer() }} src={pokemon.spriteURL} alt=""></img>
                            </div>
                        ))}
                    </div>
                </>}
                <div id="name">
                    {!this.state.showStarters && <input id='name-box' placeholder="Enter your name" onKeyPress={this.handleName} onChange={(e) => this.setState({ name: e.target.value })} />}
                </div>
            </div>
        )
    }
}



export default Welcome
