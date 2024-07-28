import styles from './Logo.module.scss';
import logoGold from '../../assets/logo-gold.svg';
import logoWhite from '../../assets/logo-white.svg';
import logoTeal from '../../assets/logo-teal.svg';

type Color = 'white' | 'gold' | 'teal';

type Props = {
	color: Color;
	style?: string;
};

const logoMap: { [key in Color]: string } = {
	white: logoWhite,
	gold: logoGold,
	teal: logoTeal,
};

const Logo = ({ color, style }: Props) => {
	return (
		<a
			href="#hero"
			title="Marina Bajic"
			className={`${styles.logo} ${style ? styles.style : ''}`}
		>
			<img
				src={logoMap[color] || logoWhite}
				alt="Marina Bajic Logo"
				loading="eager"
			/>
		</a>
	);
};

export default Logo;
