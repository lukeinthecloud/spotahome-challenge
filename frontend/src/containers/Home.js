import React, { useState } from 'react';

import HomeCard    from '../Components/HomeCard';
import SearchInput from '../Components/SearchInput';
import { post }    from '../services/communication/communication.service';

export default function Home() {
	const [homeCards, setHomeCards] = useState([]);

	async function setMarkers(markerIDs) {
		const homeCards = await _getHomeCards(markerIDs);
		setHomeCards(homeCards);
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
		<>
			<div className="container mt-4">
				<div className="row">
					<div className="col-sm-6">
						<SearchInput setMarkers={setMarkers}/>
					</div>
				</div>
			</div>

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
		</>

	);
}

