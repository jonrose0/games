import { Routes, Route } from 'react-router-dom';
import Games from './Games';
import Detail from './Detail';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import { AttributeStyled } from './styles/Attribute.styled';

const theme: DefaultTheme = {
	fontFamily: 'Roboto, sans-serif',

	colors: {
		main: '#10141f',
		secondary: '#1d2844',
		light: '#ffffff',
	},
};

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
				<AttributeStyled href='https://rawg.io/' target='_blank'>
					Data from RAWG
				</AttributeStyled>
			</ThemeProvider>
		</div>
	);
}

export default App;
