import React, { useState } from 'react';

import { get } from '../services/communication/communication.service';

export default function MarkerSearch(props) {
	const [marker, setMarker] = useState('');

	async function getMarkers() {
		const result = await _getMarkersForLocation();
		console.log(result);
		props.setMarkers(result);
	}

	function updateMarkerInput(e) {
		const marker = e.target.value.toLowerCase();
		setMarker(marker);
	}

	async function _getMarkersForLocation() {
		const markersByIDResponse = await get({
			url: `/markers/${marker}`,
			queryParams: {
				returnID: true
			}
		});

		return markersByIDResponse.result;
	}

	return (
		<>
			<input type="text" onChange={updateMarkerInput} placeholder="Search.."/>
			<button onClick={getMarkers} className="btn btn-secondary ml-2">Search</button>
		</>
	);
}

