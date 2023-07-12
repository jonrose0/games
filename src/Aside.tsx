import {
	AsideStyled,
	Platform,
	Genre,
	CheckBoxWrapper,
	CheckBox,
} from './styles/Aside.styled';
import { platforms, genres } from './data';

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
