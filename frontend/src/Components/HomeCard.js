import React                                   from 'react';
import { CardContainer, ImageContainerStyled } from './styles/HomeCard.style';

export default function HomeCard(props) {
	const homeCard = props.homeCard;

	return (
		<CardContainer className="card">
			<ImageContainerStyled>
				<img src={homeCard.mainPhotoUrl}
				     className="img-fluid" alt=""/>
			</ImageContainerStyled>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<p className="card-text">
						{homeCard.title}
					</p>
					<h2>
						{homeCard.currencySymbol}
						{homeCard.pricePerMonth}
					</h2>
				</div>

				<div className="col d-flex justify-content-end">
					<a href="#" className="btn btn-primary">More Details</a>
					<a href="#" className="btn btn-primary ml-1">Book Now</a>
				</div>
			</div>
		</CardContainer>
	);
}

