import styled from 'styled-components';
import checkmark from './assets/icon-check.svg';

const AsideStyled = styled.aside`
	display: none;
	position: fixed;
	min-width: 18rem;
	min-height: 100vh;
	box-shadow: 5px 0 5px rgb(0 0 0 / 20%);
	padding: 7rem 2rem 2rem;

	@media (min-width: 48em) {
		display: block;
	}
`;

const Platform = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
	padding-bottom: 1rem;
`;

const Genre = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding-top: 1rem;
`;

const CheckBoxWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const CheckBox = styled.input`
	appearance: none;
	font: inherit;
	cursor: pointer;
	position: relative;
	width: 1.5em;
	height: 1.5em;
	transform: translateY(-0.075em);
	margin: 0;

	::before {
		content: url(${checkmark});
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
		border-radius: 50%;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		z-index: 100;
	}

	::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 0.25rem;
		background-color: ${({ theme }) => theme.colors.secondary};
		z-index: 0;
		transform: scale(0.9);
	}

	:checked::before {
		transform: scale(1);
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

interface AsideProps {
	filterPlatform: boolean[];
	setFilterPlatform: React.Dispatch<React.SetStateAction<boolean[]>>;
	filterGenre: boolean[];
	setFilterGenres: React.Dispatch<React.SetStateAction<boolean[]>>;
}

function Aside({
	filterPlatform,
	setFilterPlatform,
	filterGenre,
	setFilterGenres,
}: AsideProps) {
	const filterSearch = (position: number, type: string) => {
		let updatedCheckedState;

		if (type === 'platform') {
			updatedCheckedState = filterPlatform.map((item, index) =>
				index === position ? !item : item
			);
			setFilterPlatform(updatedCheckedState);
		} else {
			updatedCheckedState = filterGenre.map((item, index) =>
				index === position ? !item : item
			);
			setFilterGenres(updatedCheckedState);
		}
	};

	return (
		<AsideStyled>
			<Platform>
				{platforms.map(({ id, name }, index) => {
					return (
						<CheckBoxWrapper key={index}>
							<CheckBox
								type='checkbox'
								id={name}
								name={name}
								value={id}
								checked={filterPlatform[index]}
								onChange={() => filterSearch(index, 'platform')}
							/>
							<label htmlFor={name}>{name}</label>
						</CheckBoxWrapper>
					);
				})}
			</Platform>
			<Genre>
				{genres.map(({ id, name }, index) => {
					return (
						<CheckBoxWrapper key={index}>
							<CheckBox
								type='checkbox'
								id={name}
								name={name}
								value={id}
								checked={filterGenre[index]}
								onChange={() => filterSearch(index, 'genre')}
							/>
							<label htmlFor={name}>{name}</label>
						</CheckBoxWrapper>
					);
				})}
			</Genre>
		</AsideStyled>
	);
}

export default Aside;
