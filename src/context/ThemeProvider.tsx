import { createContext, ReactNode, useContext, useState } from 'react';

type ContextProps = {
	theme: string;
	toggleTheme: (theme: string) => void;
};

const ThemeContext = createContext<ContextProps | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<string>(() => {
		const storedTheme = localStorage.getItem('theme');
		return storedTheme ? storedTheme : 'designer';
	});

	const toggleTheme = (theme: string) => {
		setTheme(theme);
		localStorage.setItem('theme', theme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
