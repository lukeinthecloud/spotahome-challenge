import React, { useEffect, useState } from 'react';

import HomeCard      from '../Components/HomeCard';
import { get, post } from '../services/communication/communication.service';

export default function Home() {
	const [homeCards, setHomeCards] = useState([]);

	useEffect(() => {
		_getRoomData();
	}, []);


	async function _getRoomData() {
		const markersByID = await _getMarkersForLocation();
		const homeCards = await _getHomeCards(markersByID);
		setHomeCards(homeCards);
	}

	async function _getMarkersForLocation() {
		const markersByIDResponse = await get({
			url: '/markers/london',
			queryParams: {
				returnID: true
			}
		});

		return markersByIDResponse.result;
	}

	async function _getHomeCards(markersByID) {
		const homeCardsResponse = await post({
			url: '/homecards',
			data: {
				homecardIDs: markersByID
			}
		});

		return homeCardsResponse.result;
	}

	return (
		<div className="container">
			{homeCards.map((homeCard) => {
				return (
					<div className="row mt-4" key={homeCard.id}>
						<div className="col-sm-9 col-md-7 col-lg-12 mx-auto">
							<HomeCard homeCard={homeCard}/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

