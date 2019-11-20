import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import PokeballMarker from './PokeballMarker';

export class Map extends Component {

    constructor(props){
        super(props)
        this.state = {
        viewport: {
            width: 700,
            height: 700,
            latitude: 40.704200,
            longitude: -74.011020,
            zoom: 12
        }
    };
}
    render() {
        return (
            <ReactMapGL
                mapboxApiAccessToken={'pk.eyJ1IjoibWthemkiLCJhIjoiY2szNm42Y214MDM5djNjcnozcmFseGplaiJ9.romUGZKRAwbaprnN_LrRiw'}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
                <Marker latitude={40.715326} longitude={-73.992354} offsetLeft={-20} offsetTop={-10}> 
                    <PokeballMarker />
                </Marker>
            </ReactMapGL>
        );
    }
}

export default Map