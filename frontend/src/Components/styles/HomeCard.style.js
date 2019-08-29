import styled from 'styled-components';

export const CardTitleStyled = styled.h1`
	font-size: 1.3rem;
`;

export const CardPriceStyled = styled.h3`
    background: var(--sph-grey-black);
    color: var(--sph-yellow-primary);
    border-radius: 11rem;
    font-size: 1rem;
    padding: 10px;
`;

export const CardContainerStyled = styled.div`
	background: var(--sph-white);
	border: .1rem solid var(--sph-grey-primary);
	align-items: center;
	padding: 2rem;
`;

export const ImageContainerStyled = styled.div`
	max-width: 200px;
  	transition: box-shadow .3s ease-in-out;
  	
	:hover {
		box-shadow: 6px 10px 25px -4px rgba(0,0,0,0.75);
	}
`;