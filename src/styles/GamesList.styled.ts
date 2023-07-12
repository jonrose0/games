import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	grid-column: 1 / -1;
	justify-self: center;
	display: flex;
	animation: ${rotate} 2s linear infinite;
	font-size: 2rem;
`;

const Cards = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;

	@media (min-width: 31.25em) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 64em) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 105em) {
		grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	}
`;

const Card = styled(Link)`
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.light};
	text-decoration: none;
	border-radius: 1rem;
	overflow: hidden;
`;

const Wrapper = styled.div`
	padding: 1rem 2rem;
`;

const Name = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1.2;
	margin: 0.5rem 0;
`;

const Image = styled.img`
	height: 10rem;
`;

const Platforms = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export {Spinner, Cards, Card, Wrapper, Name, Image, Platforms}