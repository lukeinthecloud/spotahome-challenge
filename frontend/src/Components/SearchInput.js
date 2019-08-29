import React, { useState } from 'react';

import { get }                        from '../services/communication/communication.service';
import { FormStyled, InputBarStyled } from './styles/SearchInput.style';

export default function MarkerSearch(props) {
	const [marker, setMarker] = useState('');

	async function getMarkers(e) {
		e.preventDefault();
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
				returnID: true,
				limit: 30
			}
		});

		return markersByIDResponse.result;
	}

	return (
		<FormStyled className="d-flex row">
			<InputBarStyled type="text" onChange={updateMarkerInput} className="col-sm-8" placeholder="Search.."/>
			<button onClick={getMarkers} className="btn btn-secondary ml-2 mb-0" type="submit">Search</button>
		</FormStyled>
	);
}

