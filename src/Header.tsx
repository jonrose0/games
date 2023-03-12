import { useEffect } from 'react';
import { useGlobalContext, ContextProps } from './context';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
	const { darkToggle, setDarkToggle } = useGlobalContext() as ContextProps;

	useEffect(() => {
		darkToggle && localStorage.setItem('theme', darkToggle);
	});

	const changeToggle = () => {
		darkToggle === 'dark' ? setDarkToggle('light') : setDarkToggle('dark');
	};

	return (
		<header className='header'>
			<button className='toggle' onClick={changeToggle}>
				<FaMoon /> Dark Mode
			</button>
		</header>
	);
};

export default Header;
