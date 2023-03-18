import { Link } from 'react-router-dom';
import { SiMicrosoft, SiNintendo, SiPlaystation, SiXbox } from 'react-icons/si';
import { ImSpinner2 } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';

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
