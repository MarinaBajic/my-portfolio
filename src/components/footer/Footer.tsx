import styles from './Footer.module.scss';
import themesData from './themesData.json';
import { useTheme } from '../../context/ThemeProvider';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Themes />
			<div className={styles.copyright}>
				<span>Made with love by Marina Bajić</span>
				<span>Copyright © 2024</span>
			</div>
		</footer>
	);
};

const Themes = () => {
	const themes: Array<string> = themesData;
	const { toggleTheme } = useTheme();

	return (
		<form className={styles.themes}>
			{themes.map((theme, index) => (
				<span key={index}>
					<input
						type="radio"
						name="theme"
						id={theme}
						onChange={() => toggleTheme(theme)}
					/>
					<label htmlFor={theme}>{theme}</label>
				</span>
			))}
		</form>
	);
};

export default Footer;
