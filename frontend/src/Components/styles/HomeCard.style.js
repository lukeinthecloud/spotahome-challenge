import styled from 'styled-components';

export const CardTitleStyled = styled.h1`
	font-size: 1.3rem;
`;

export const CardContainerStyled = styled.div`
	border-color: var(--sph-grey-primary);
	align-items: center;
	padding: 2rem;
	flex-direction: row !important; 
	border-width: .1rem !important;
`;

export const ImageContainerStyled = styled.div`
	max-width: 200px;
  	transition: box-shadow .3s ease-in-out;
  	
	:hover {
		box-shadow: 6px 10px 25px -4px rgba(0,0,0,0.75);
	}
`;