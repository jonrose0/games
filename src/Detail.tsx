import useFetch from './useFetch';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

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

const Detail = () => {
	const { id } = useParams();
	const { items } = useFetch(`/${id}`);

	let date: Date;
	let releseDate;

	if (items) {
		date = new Date(items[0]!.released);
		releseDate = `${date.toLocaleString('default', {
			month: 'long',
		})} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
	}

	if (items) {
		return (
			<Container>
				<BackBtn to='/'>Back</BackBtn>
				<Wrapper>
					<GameImage>
						<img src={items[0].background_image}></img>
					</GameImage>
					<GameInfo>
						<Name>{items[0].name}</Name>
						<div>
							Developer:{' '}
							{items[0]
								.developers!.map((dev) => {
									return dev.name;
								})
								.join(', ')}
						</div>
						<div>
							Publisher:{' '}
							{items[0]
								.publishers!.map((publisher) => {
									return publisher.name;
								})
								.join(', ')}
						</div>
						<div>Released: {releseDate}</div>
						{items[0].esrb_rating ? (
							<div>Rating: {items[0].esrb_rating.name}</div>
						) : (
							''
						)}
						<div>
							Genres:{' '}
							{items[0].genres
								?.map((item) => {
									return item.name;
								})
								.join(', ')}
						</div>
						<div>
							Platforms:{' '}
							{items[0].platforms
								.map((item) => {
									return item.platform.name;
								})
								.join(', ')}
						</div>
						<div>
							Stores:{' '}
							{items[0].stores
								.map((item) => {
									return item.store.name;
								})
								.join(', ')}
						</div>
					</GameInfo>
				</Wrapper>

				<p>{items[0].description_raw}</p>
			</Container>
		);
	} else {
		return <div></div>;
	}
};

export default Detail;
