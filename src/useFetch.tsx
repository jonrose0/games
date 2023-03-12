import { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://api.rawg.io/api/games';
const API_KEY = '?key=';

// &dates=2023-01-01,2023-12-31

interface ItemsProps {
	id?: number;
	background_image?: string;
	parent_platforms?: ChildProps[];
	platforms: ChildProps[];
	esrb_rating?: ChildProps;
	name?: string;
	genres?: ChildProps[];
	description_raw?: string;
	developers?: ChildProps[];
	publishers?: ChildProps[];
	released: string;
	stores: ChildProps[];
}

interface ChildProps {
	id: number;
	name: string;
	store: {
		name: string;
	};
	platform: {
		id: number;
		name: string;
	};
}

const useFetch = (url = '', page = 1, query = '') => {
	const [isLoading, setIsLoading] = useState(true);
	const [items, setItems] = useState<ItemsProps[]>();

	console.log(isLoading);

	const getItems = async (data: string) => {
		setIsLoading(true);
		// console.log('get');
		try {
			const res = await fetch(data);
			const items = await res.json();

			// console.log(items);

			if (url) {
				return setItems([items]);
			}
			if (page > 1) {
				return setItems((oldItems) =>
					oldItems ? [...oldItems, ...items.results] : [items]
				);
			}

			setItems(items.results);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getItems(
			`${API_ENDPOINT}${url}${API_KEY}${query}&page=${page}&ordering=-added`
		);
	}, [url, page, query]);

	return { isLoading, items };
};

export default useFetch;
