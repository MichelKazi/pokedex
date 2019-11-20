import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

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
            />
        );
    }
}

export default Map