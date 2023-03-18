import { useEffect, useState } from 'react';

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

	const getItems = async () => {
		setIsLoading(true);
		try {
			const res = await fetch(`/api/handler?url=${url}${query}&page=${page}`);
			const items = await res.json();

			if (url) {
				return setItems([items.data]);
			}
			if (page > 1) {
				return setItems((oldItems) =>
					oldItems ? [...oldItems, ...items.data] : [items.data]
				);
			}

			setItems(items.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getItems();
	}, [url, page, query]);

	return { isLoading, items };
};

export default useFetch;
