import React                                                          from 'react';
import { CardContainerStyled, CardTitleStyled, ImageContainerStyled } from './styles/HomeCard.style';

export default function HomeCard(props) {
	const homeCard = props.homeCard;

	return (
		<CardContainerStyled className="card">
			<ImageContainerStyled>
				<img src={homeCard.mainPhotoUrl}
				     className="img-fluid" alt=""/>
			</ImageContainerStyled>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<CardTitleStyled>
						{homeCard.title}
					</CardTitleStyled>
					<h3>
						{homeCard.currencySymbol}
						{homeCard.pricePerMonth}
					</h3>
				</div>

				<div className="col d-flex justify-content-end">
					<a href="#" className="btn btn-primary">More Details</a>
					<a href="#" className="btn btn-secondary ml-2">Book Now</a>
				</div>
			</div>
		</CardContainerStyled>
	);
}

