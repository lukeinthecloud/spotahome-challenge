import styled from 'styled-components';

export const FormStyled = styled.form`
	height: 100%;
	
	@media (max-width: 576px) {
		justify-content: center;
  	}
`;

export const InputBarStyled = styled.input`
	height: 100%;
	padding: 0 10px;
	
	@media (max-width: 576px) {
    	width: 80% !important;
  	}
`;