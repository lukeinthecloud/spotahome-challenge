import React                    from 'react';
import { ImageContainerStyled } from './styles/HomeCard.style';

export default function HomeCard() {
	return (
		<div className="card">
			<ImageContainerStyled>
				<img src="https://en.bcdn.biz/Images/2018/6/12/27565ee3-ffc0-4a4d-af63-ce8731b65f26.jpg"
				     className="card-img-left" alt=""/>
			</ImageContainerStyled>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of
					the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
}

