import {
	Spinner,
	Cards,
	Card,
	Wrapper,
	Name,
	Image,
	Platforms,
} from './styles/GamesList.styled';
import { SiMicrosoft, SiNintendo, SiPlaystation, SiXbox } from 'react-icons/si';
import { ImSpinner2 } from 'react-icons/im';

interface GamesListProps {
	items: ItemsProps[] | undefined;
	isLoading: boolean;
}

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

function GamesList({ items, isLoading }: GamesListProps) {
	return (
		<Cards>
			{items &&
				items!.map((game) => {
					return (
						<Card to={`/games/${game.id}`} key={game.id}>
							<div>
								<Image src={game.background_image} alt=''></Image>
							</div>
							<Wrapper>
								<Platforms>
									{game.parent_platforms
										? game.parent_platforms.map((platform) => {
												if (platform.platform.name === 'PC') {
													return (
														<div key={platform.platform.id}>
															<SiMicrosoft />
														</div>
													);
												}
												if (platform.platform.name === 'Nintendo') {
													return (
														<div key={platform.platform.id}>
															<SiNintendo />
														</div>
													);
												}
												if (platform.platform.name === 'PlayStation') {
													return (
														<div key={platform.platform.id}>
															<SiPlaystation />
														</div>
													);
												}
												if (platform.platform.name === 'Xbox') {
													return (
														<div key={platform.platform.id}>
															<SiXbox />
														</div>
													);
												} else {
													return;
												}
										  })
										: ''}
								</Platforms>
								<Name>{game.name}</Name>
								<div>
									{game
										.genres!.map((genre) => {
											return genre.name;
										})
										.join(', ')}
								</div>
							</Wrapper>
						</Card>
					);
				})}
			{isLoading ? (
				<Spinner>
					<ImSpinner2 />
				</Spinner>
			) : (
				''
			)}
		</Cards>
	);
}

export default GamesList;
