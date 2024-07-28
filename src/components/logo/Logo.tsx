import styles from './Logo.module.scss';
import logoGold from '../../assets/logo-gold.svg';
import logoWhite from '../../assets/logo-white.svg';
import logoTeal from '../../assets/logo-teal.svg';

type Color = 'white' | 'gold' | 'teal';

type Props = {
	linked?: boolean;
	color: Color;
	style?: string;
};

const logoMap: { [key in Color]: string } = {
	white: logoWhite,
	gold: logoGold,
	teal: logoTeal,
};

const Logo = ({ linked = false, color, style }: Props) => {
	return linked ? (
		<a href="#hero" title="Marina Bajic" className={styles.logo}>
			<img
				src={logoMap[color] || logoWhite}
				alt="Marina Bajic Logo"
				loading="eager"
			/>
		</a>
	) : (
		<img
			src={logoMap[color] || logoWhite}
			alt="Marina Bajic Logo"
			loading="eager"
			className={`${styles.logo} ${style ? styles.style : ''}`}
		/>
	);
};
export default Logo;
