import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import PokeballMarker from './PokeballMarker.js'
import '../styles/map.scss'
require('dotenv').config()



const Map = props => {

	const [viewport, setViewport] = useState
	({
			width: "92vw",
			height: "85.5vh",
			latitude: 40.704200,
			longitude: -74.011020,
			maxZoom: 16,
			minZoom: 10,
			zoom: 10
		})
	return (
		<>
			<ReactMapGL className="map"
				captureDoubleClick={false}
				mapStyle="mapvox://styles/mapbox/dark-v10"
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
				{...viewport}
			/>	
		</>
	)
}

export default Map
