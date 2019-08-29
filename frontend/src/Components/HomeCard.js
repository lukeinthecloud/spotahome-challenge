import React    from 'react';
import { Link } from 'react-router-dom';
import {
	CardContainerStyled,
	CardDetailsContainerStyled,
	CardPriceStyled,
	CardTitleStyled,
	ImageContainerStyled
}               from './styles/HomeCard.style';

export default function HomeCard(props) {
	const homeCard = props.homeCard;

	return (
		<CardContainerStyled className="row">
			<ImageContainerStyled>
				<img src={homeCard.mainPhotoUrl}
				     className="img-fluid" alt=""/>
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
						<Link className="col-lg-3 btn btn-primary" to={`/rooms/${homeCard.id}`}>Details</Link>
						<Link className="col-lg-3 btn btn-secondary ml-2 d-none d-lg-block" to={`/rooms/${homeCard.id}/booking`}>Book</Link>
					</div>
				</div>
			</div>
		</CardContainerStyled>
	);
}

