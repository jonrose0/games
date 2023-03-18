import React, { useState, useContext, ReactNode } from 'react';

// todo

export interface ContextProps {
	darkToggle: string | null;
	setDarkToggle: React.Dispatch<React.SetStateAction<string | null>>;
}

const AppContext = React.createContext<ContextProps | null>(null);

const getStorageTheme = () => {
	if (localStorage.getItem('theme')) {
		return localStorage.getItem('theme');
	} else {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	}
};

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [darkToggle, setDarkToggle] = useState(getStorageTheme());

	return (
		<AppContext.Provider value={{ darkToggle, setDarkToggle }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };

// components
// cards
// dark mode
// infinite scrolling
// multi filter
// detailed page
