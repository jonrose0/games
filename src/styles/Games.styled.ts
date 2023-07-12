import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 48em) {
		grid-template-columns: 18rem 1fr;
	}
`;

const GamesListStyled = styled.div`
	width: 100%;
	grid-column: 2 / 3;
	padding: 1.5rem;
`;

const SearchField = styled.input`
	font: inherit;
	background-color: ${({ theme }) => theme.colors.main};
	color: ${({ theme }) => theme.colors.light};
	display: block;
	width: 100%;
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 10rem;
	padding: 1rem 2rem;
	margin-left: auto;
	margin-bottom: 2rem;

	@media (min-width: 48em) {
		max-width: 20rem;
	}
`;

export {Container, GamesListStyled, SearchField}