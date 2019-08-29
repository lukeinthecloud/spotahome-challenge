import React, { useState } from 'react';

import { get }                        from '../services/communication/communication.service';
import { FormStyled, InputBarStyled } from './styles/SearchInput.style';

export default function MarkerSearch(props) {
	const [marker, setMarker] = useState(undefined);
	const [searchText, setSearchText] = useState('Search');

	async function getMarkers(e) {
		e.preventDefault();
		const result = await _getMarkersForLocation();

		props.setMarkers(result, () => {
			setSearchText('Search');
		});
	}

	function updateMarkerInput(e) {
		const marker = e.target.value.toLowerCase();
		setMarker(marker);
	}

	async function _getMarkersForLocation() {
		setSearchText('Searching');

		const markersByIDResponse = await get({
			url: `/markers/${marker}`,
			queryParams: {
				returnID: true,
				limit: 30
			}
		});

		if (markersByIDResponse.result) {
			return markersByIDResponse.result
		} else {
			return [];
		}
	}

	return (
		<FormStyled className="d-flex row">
			<InputBarStyled type="text" onChange={updateMarkerInput} className="col-sm-8"
			                placeholder="Please enter a country..."/>
			<button onClick={getMarkers}
			        className="btn btn-secondary ml-2 mb-0"
			        type="submit"
			>{searchText}</button>
		</FormStyled>
	);
}

