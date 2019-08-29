import React                                                                           from 'react';
import {
	CardContainerStyled,
	CardDetailsContainerStyled,
	CardPriceStyled,
	CardTitleStyled,
	ImageContainerStyled
} from './styles/HomeCard.style';

export default function HomeCard(props) {
	const homeCard = props.homeCard;

	return (
		<CardContainerStyled className="row">
			<ImageContainerStyled>
				<img src={homeCard.mainPhotoUrl}
				     className="img-fluid"/>
			</ImageContainerStyled>
			<div className="card-body">
				<CardDetailsContainerStyled className="col d-flex justify-content-between">
					<CardTitleStyled>
						{homeCard.title}
					</CardTitleStyled>
					<CardPriceStyled>
						{homeCard.currencySymbol}
						{homeCard.pricePerMonth}
					</CardPriceStyled>
				</CardDetailsContainerStyled>

				<div className="col flex-column  mt-5">
					<div className="row d-flex justify-content-end">
						<a href="#" className="col-lg-3 btn btn-primary">More Details</a>
						<a href="#" className="col-lg-3 btn btn-secondary ml-2 d-none d-lg-block">Book Now</a>
					</div>
				</div>
			</div>
		</CardContainerStyled>
	);
}

