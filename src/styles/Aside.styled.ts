import styled from "styled-components";
import checkmark from '../assets/icon-check.svg';

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

export {AsideStyled, Platform, Genre, CheckBoxWrapper, CheckBox}