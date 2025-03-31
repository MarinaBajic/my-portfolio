import styles from './Footer.module.scss';
import themesData from './themesData.json';
import { useTheme } from '../../context/ThemeProvider';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Themes />
			<div className={styles.copyright}>
				<span>Made with love by Marina Bajić</span>
				<span>Copyright © 2025</span>
			</div>
		</footer>
	);
};

const Themes = () => {
	const themes: Array<string> = themesData;
	const { theme, toggleTheme } = useTheme();

	return (
		<form className={styles.themes}>
			{themes.map((themeName, index) => (
				<div key={index} className={styles.theme}>
					<input
						type="radio"
						name="theme"
						id={themeName}
						checked={theme == themeName}
						onChange={() => toggleTheme(themeName)}
					/>
					<label htmlFor={themeName}>{themeName}</label>
				</div>
			))}
		</form>
	);
};

export default Footer;
