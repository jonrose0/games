import {createGlobalStyle} from "styled-components";

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

export default GlobalStyles