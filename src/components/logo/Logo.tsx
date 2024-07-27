import styles from './Logo.module.scss';
import logoWhite from '../../assets/logo-white.svg';
import logoTeal from '../../assets/logo-teal.svg';
import { useTheme } from '../../context/ThemeProvider';

const Logo = () => {
	const { theme } = useTheme();

	return (
		<a href="#hero" title="Marina Bajic" className={styles.logo}>
			<img
				src={theme == 'cybersec' ? logoTeal : logoWhite}
				alt="Marina Bajic Logo"
				loading="eager"
			/>
		</a>
	);
};

export default Logo;
