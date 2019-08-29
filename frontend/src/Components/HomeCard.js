import React                                                                           from 'react';
import { CardContainerStyled, CardPriceStyled, CardTitleStyled, ImageContainerStyled } from './styles/HomeCard.style';

export default function HomeCard(props) {
	const homeCard = props.homeCard;

	return (
		<CardContainerStyled className="row">
			<ImageContainerStyled>
				<img src={homeCard.mainPhotoUrl}
				     className="img-fluid"/>
			</ImageContainerStyled>
			<div className="card-body">
				<div className="col d-flex justify-content-between">
					<CardTitleStyled>
						{homeCard.title}
					</CardTitleStyled>
					<CardPriceStyled>
						{homeCard.currencySymbol}
						{homeCard.pricePerMonth}
					</CardPriceStyled>
				</div>

				<div className="col d-flex justify-content-end mt-5">
					<a href="#" className="btn btn-primary">More Details</a>
					<a href="#" className="btn btn-secondary ml-2">Book Now</a>
				</div>
			</div>
		</CardContainerStyled>
	);
}

