import React                                   from 'react';
import { CardContainer, ImageContainerStyled } from './styles/HomeCard.style';

export default function HomeCard() {
	return (
		<CardContainer className="card">
			<ImageContainerStyled>
				<img src="https://en.bcdn.biz/Images/2018/6/12/27565ee3-ffc0-4a4d-af63-ce8731b65f26.jpg"
				     className="img-fluid" alt=""/>
			</ImageContainerStyled>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</p>
					<h2>Price</h2>
				</div>

				<div className="col d-flex justify-content-end">
					<a href="#" className="btn btn-primary">More Details</a>
					<a href="#" className="btn btn-primary ml-1">Book Now</a>
				</div>
			</div>
		</CardContainer>
	);
}

