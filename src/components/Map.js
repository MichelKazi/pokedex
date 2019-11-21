import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import PokeballMarker from './PokeballMarker';
import PokemonCard from './PokemonCard';
import Pokemon from '../Pokemon'

export class Map extends Component {

    constructor(props){
        super(props)
        this.state = {
        viewport: {
            width: "70%",
            height: 700,
            latitude: 40.704200,
            longitude: -74.011020,
            zoom: 12
        },
        labelShowing : false
    };

    //binding the this keyword
    this.showLabel=this.showLabel.bind(this)
    this.hideLabel=this.hideLabel.bind(this)
    this.genPokemon=this.genPokemon.bind(this)
}
    showLabel() {
        this.setState({
            labelShowing: true,
        })
    }

    genPokemon() {
        
        this.setState({
            renderedPokemon: new Pokemon(Math.floor(Math.random() * 800) + 1)
        })
    }

    hideLabel() {
        this.setState({labelShowing: false})
    }


    render() {
        return (
            <ReactMapGL className ="map"
                mapboxApiAccessToken={'pk.eyJ1IjoibWthemkiLCJhIjoiY2szNm42Y214MDM5djNjcnozcmFseGplaiJ9.romUGZKRAwbaprnN_LrRiw'}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
                {this.state.labelShowing && <PokemonCard style={{zIndex: 1}} onClick={this.hideLabel}></PokemonCard>}
                
                <Marker style={{zIndex: -1}} captureClick={false} latitude={40.715326} longitude={-73.992354} offsetLeft={-20} offsetTop={-10}> 
                    <PokeballMarker onClick={this.showLabel}/>
                </Marker>
                
            </ReactMapGL>
        );
    }
}

export default Map