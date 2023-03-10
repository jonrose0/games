import { Routes, Route } from 'react-router-dom';
import Games from './Games';
import Detail from './Detail';
import {
	createGlobalStyle,
	DefaultTheme,
	ThemeProvider,
} from 'styled-components';

const theme: DefaultTheme = {
	fontFamily: 'Roboto, sans-serif',

	colors: {
		main: '#10141f',
		secondary: '#1d2844',
		light: '#ffffff',
	},
};

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		font-family: ${({ theme }) => theme.fontFamily};
		background-color: ${({ theme }) => theme.colors.main};
		color: ${({ theme }) => theme.colors.light};
		min-width: 20rem;
		min-height: 100vh;
		margin: 0;
	}

	p {
		line-height: 1.5;
	}

	img {
		display: block;
		width: 100%;
		object-fit: cover;
	}
`;

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<main>
					<Routes>
						<Route path='/' element={<Games />} />
						<Route path='games/:id' element={<Detail />} />
					</Routes>
				</main>
			</ThemeProvider>
		</div>
	);
}

export default App;
