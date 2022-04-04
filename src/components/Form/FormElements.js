import styled from 'styled-components';

export const Container = styled.div`
	padding: 1rem;
	margin: 1rem;
	width: 250px;
	border: 1px solid #666;
	box-shadow: 10px 10px lightblue;
	background-color: white;
`;

export const TitleCloseBtn = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: -0.5rem -0.5rem 0.5rem 0;
`;

export const H1 = styled.h1`
	font-size: 2rem;
	font-weight: 100;
	border: 1px solid grey;
	margin: auto;
	padding: 1.5rem;
	text-align: center;
`;

export const Div = styled.div`
	margin-top: 0.5rem;
	padding: 1rem 0.5rem 0rem 0.5rem;
	background-color: #f4f4f4;
	border-bottom: 1px solid #666;
	height: 2rem;
`;

export const Label = styled.p`
	display: inline;
	position: absolute;
	height: 3rem;
	font-size: 0.9rem;
	font-weight: 100;
	margin-top: 0rem;
	color: darkgray;

	&:hover {
		margin-top: -0.6rem;
		font-size: 0.8rem;
		transition: 300ms ease-out;
		color: grey;
	}
`;

export const Input = styled.input`
	display: inline-block;
	width: 98%;
	height: 1rem;
	background-color: #f4f4f4;
	border: none;

	&::placeholder {
		color: blue;
	}

	&:focus::placeholder {
		font-size: 0.7rem;
		margin-bottom: 2rem;
		color: red;
		transition: 300ms ease-out;
	}
`;

export const InputBtn = styled.input`
	display: block;
	width: 100%;
	height: 2.5rem;
	font-size: 0.9rem;
	margin-top: 2rem;
	cursor: pointer;
	border-radius: 0;
`;
