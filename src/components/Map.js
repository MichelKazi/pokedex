import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import PokeballMarker from './PokeballMarker';
import PokemonCard from './PokemonCard';


export class Map extends Component {

    constructor(props){
        super(props)
        this.state = {
        viewport: {
            width: "70%",
            height: 700,
            latitude: 40.704200,
            longitude: -74.011020,
            zoom: 14
        },
        labelShowing : false,
        navigatorChecked: false,
        
    };
    //binding the this keyword
    this.showLabel=this.showLabel.bind(this)
    this.hideLabel=this.hideLabel.bind(this)
    this.locate=this.locate.bind(this)
    }

    componentDidMount(){
        this.locate()
      } //locate is left here because this will toggle navigatorChecked
      
    componentDidUpdate(prevProps, prevState) {
      if (prevState.navigatorChecked !== this.state.navigatorChecked) {
        const locations = Array(50).fill(0)
            .map(() => ({
                lat: this.state.viewport.latitude + ((Math.random() - 0.5) / 15),
                lng: this.state.viewport.longitude + ((Math.random() - 0.5) / 15),
            }));    
        this.setState({ locations })
    }//now update 
      }

    locate(cb = _ => {}) {
        if (!navigator) {
            this.setState({ navigatorChecked: true }, cb())
        } else {
            navigator.geolocation.getCurrentPosition(userLocation => {
                this.setState({
                    navigatorChecked: true,
                    viewport: {
                      width: "70%",
                      height: 700,
                      longitude: userLocation.coords.longitude,
                      latitude: userLocation.coords.latitude,
                      zoom: 13
                    },
                }, cb())
            })
        }
      

    }

    showLabel() {
        this.setState({
            labelShowing: true,
        })
    }


    hideLabel() {
        this.setState({labelShowing: false})
    }


    render() {
        return (
          <div>
          {this.state.labelShowing && <PokemonCard style={{zIndex: 1}} onClick={this.hideLabel}></PokemonCard>}
            <ReactMapGL className ="map"
                mapboxApiAccessToken={'pk.eyJ1IjoibWthemkiLCJhIjoiY2szNm42Y214MDM5djNjcnozcmFseGplaiJ9.romUGZKRAwbaprnN_LrRiw'}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
                {this.state.navigatorChecked && this.state.locations && this.state.locations.map(({ lat, lng }) => (
                    <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10} style={{ zIndex: 21 }} captureClick={false}>
                        <PokeballMarker onClick={this.showLabel} />
                    </Marker>
                ))}
                {/* <Marker style={{ zIndex: -1 }} captureClick={false} 
                    latitude={this.state.viewport.latitude + (Math.random() - .5) / 25} 
                    longitude={this.state.viewport.longitude + (Math.random() - .5) / 25} 
                offsetLeft={-20} offsetTop={-10}> 
                    <PokeballMarker onClick={this.showLabel}/>
                </Marker> */}
                
            </ReactMapGL>
          </div>
        );
    }
}

export default Map