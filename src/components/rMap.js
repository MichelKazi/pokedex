import React, { useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'
import '../styles/map.scss'
import { usePrevious } from '../lib/usePrevious.js'
require('dotenv').config()



const Map = props => {

	const [viewport, setViewport] = useState({
			width: "92vw",
			height: "85.5vh",
			latitude: 40.704200,
			longitude: -74.011020,
			maxZoom: 16,
			minZoom: 10,
			zoom: 10
		})
	const [labelShowing, setLabelShowing] = useState(false)
	const [navigatorChecked, setNaviagtorChecked] = useState(false)

	// Instead of having a locate function, just move its definition to useEffect
	useEffect(() => {
		if (!navigator){
			setNaviagtorChecked(true)
		} else {
			navigator.geolocation.getCurrentPosition( userLocation => {
				setNaviagtorChecked(true)
				setViewport(
					{
						...viewport,
						longitude: userLocation.coords.longitude,
						latitude: userLocation.coords.latitude
					}
				)
			})
		}
	}, [viewport]);



	return (
		<>
			<ReactMapGL className="map"
				captureDoubleClick={false}
				mapStyle="mapvox://styles/mapbox/dark-v10"
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
				{...viewport}
				onViewportChange={(viewport) => setViewport(...viewport)} 
			>	
				{ /* New Card component belongs here */ }

			</ReactMapGL>
		</>
	)
}

export default Map
