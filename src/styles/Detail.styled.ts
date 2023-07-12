import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
	max-width: 75rem;
	padding: 1.5rem;
	margin-inline: auto;
`;

const BackBtn = styled(Link)`
	display: inline-block;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.light};
	text-decoration: none;
	padding: 0.5rem;
	margin-bottom: 2rem;
`;

const Wrapper = styled.div`
	@media (min-width: 56.25em) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}
`;

const GameImage = styled.div`
	flex-basis: 50%;
	margin-bottom: 2rem;
`;

const GameInfo = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 2rem;
`;

const Name = styled.h1`
	margin: 0;
`;

export {Container, Wrapper, BackBtn, GameImage, GameInfo, Name}