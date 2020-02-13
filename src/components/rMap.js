import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import PokeballMarker from './PokeballMarker.js'
import '../styles/map.scss'

const Map = props => {

	return (
		<>
			<ReactMapGL className="map"
				captureDoubleClick={false}
				mapStyle="mapvox://styles/mapbox/dark-v10"
				mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
			/>	
		</>
	)
}

export default Map
