import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import Aside from './Aside';
import GamesList from './GamesList';
import styled from 'styled-components';

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

const platforms = [
	{
		id: 2,
		name: 'PlayStation',
	},
	{
		id: 3,
		name: 'Xbox',
	},
	{
		id: 7,
		name: 'Nintendo',
	},
	{
		id: 1,
		name: 'PC',
	},
];

const genres = [
	{
		id: 1,
		name: 'Racing',
	},
	{
		id: 2,
		name: 'Shooter',
	},
	{
		id: 3,
		name: 'Adventure',
	},
	{
		id: 4,
		name: 'Action',
	},
	{
		id: 5,
		name: 'RPG',
	},
	{
		id: 6,
		name: 'fighting',
	},
	{
		id: 7,
		name: 'Puzzle',
	},
	{
		id: 10,
		name: 'Strategy',
	},
	{
		id: 51,
		name: 'Indie',
	},
	{
		id: 83,
		name: 'Platformer',
	},
];

const Games = () => {
	const [page, setPage] = useState(1);
	const [input, setInput] = useState('');
	const [filterPlatform, setFilterPlatform] = useState(
		new Array(platforms.length).fill(false)
	);
	const [filterGenre, setFilterGenres] = useState(
		new Array(genres.length).fill(false)
	);
	const [query, setQuery] = useState('');
	const { isLoading, items } = useFetch('', page, query);

	useEffect(() => {
		let searchQuery: string = '';
		let platformQuery: number[] = [];
		let genreQuery: number[] = [];
		let platformFilter: string = '';
		let genreFilter: string = '';
		let combinedQuery: string = '';

		if (input === '') {
			searchQuery = '';
		} else {
			searchQuery = `&search=${input}&search_precise=true`;
		}

		filterPlatform.map((item, index) => {
			if (item) {
				platformQuery.push(platforms[index].id);
				platformFilter = `&parent_platforms=${platformQuery.join(',')}`;
			}
		});

		filterGenre.map((item, index) => {
			if (item) {
				genreQuery.push(genres[index].id);
				genreFilter = `&genres=${genreQuery.join(',')}`;
			}
		});

		if (searchQuery) {
			combinedQuery += searchQuery;
		}

		if (platformFilter) {
			combinedQuery += platformFilter;
		}

		if (genreFilter) {
			combinedQuery += genreFilter;
		}

		setQuery(combinedQuery);

		setPage(1);
	}, [input, filterPlatform, filterGenre]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const event = () => {
		if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
			setPage((page) => page + 1);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', event);
		return () => window.removeEventListener('scroll', event);
	}, []);

	return (
		<Container>
			<Aside
				filterPlatform={filterPlatform}
				setFilterPlatform={setFilterPlatform}
				filterGenre={filterGenre}
				setFilterGenres={setFilterGenres}
			/>
			<GamesListStyled>
				<SearchField
					type='text'
					value={input}
					placeholder='Search'
					onChange={handleChange}
				></SearchField>
				<GamesList items={items} isLoading={isLoading} />
			</GamesListStyled>
		</Container>
	);
};

export default Games;
