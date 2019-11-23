import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import PokeballMarker from './PokeballMarker';
import PokemonCard from './PokemonCard';
import '../styles/map.scss'

export class Map extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: "100vw",
        height: "100vh",
        latitude: 40.704200,
        longitude: -74.011020,
        zoom: 7
      },
      labelShowing: false,
      navigatorChecked: false,
      pokemon: null
    };

    this.mapStyle = {
      position: 'absolute'
    }
    //binding the this keyword
    this.showLabel = this.showLabel.bind(this)
    this.hideLabel = this.hideLabel.bind(this)
    this.locate = this.locate.bind(this)
    this.pokemonHandler = this.pokemonHandler.bind(this)
  }

  componentDidMount() {
    this.locate()
  } //locate is left here because this will toggle navigatorChecked
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.navigatorChecked !== this.state.navigatorChecked) {
      const locations = Array(90).fill(0)
        .map(() => ({
          lat: this.state.viewport.latitude + ((Math.random() - 0.575) / 7.5),
          lng: this.state.viewport.longitude + ((Math.random() - 0.5) / 7.5),
        }));
      this.setState({ locations })
    }
  }

  locate(cb = _ => { }) {
    if (!navigator) {
      this.setState({ navigatorChecked: true }, cb())
    } else {
      navigator.geolocation.getCurrentPosition(userLocation => {
        this.setState({
          navigatorChecked: true,
          viewport: {
            width: "100vw",
            height: "100vh",
            longitude: userLocation.coords.longitude,
            latitude: userLocation.coords.latitude,
            zoom: 12.25
          },
        }, cb())
      })
    }
  }

  pokemonHandler(pokemon){
    this.setState({ pokemon })
    console.log(pokemon);
    
  }  //handler recieves pokemon from clicked pokeball

  showLabel() {
    this.setState({
      labelShowing: true,
    })
  }

  hideLabel() {
    this.setState({ labelShowing: false })
  }

  render() {
    return (
      <div>
        <ReactMapGL className="map" mapStyle="mapbox://styles/mapbox/dark-v10" style={this.mapStyle}
          mapboxApiAccessToken={'pk.eyJ1IjoibWthemkiLCJhIjoiY2szNm42Y214MDM5djNjcnozcmFseGplaiJ9.romUGZKRAwbaprnN_LrRiw'}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
           <PokemonCard pokemon={this.state.pokemon} style={{ zIndex: 1 }}></PokemonCard>
          {this.state.navigatorChecked && this.state.locations && this.state.locations.map(({ lat, lng }) => (
            <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10} style={{ zIndex: 21 }} captureClick={false}>
              <PokeballMarker pokemonHandler={this.pokemonHandler} />
            </Marker>
          ))}


        </ReactMapGL>
      </div>
    );
  }
}

export default Map