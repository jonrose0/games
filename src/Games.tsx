import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import Aside from './Aside';
import GamesList from './GamesList';
import { Container, GamesListStyled, SearchField } from './styles/Games.styled';
import { platforms, genres } from './data';

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
