import styles from './Button.module.scss';
import { useTheme } from '../../context/ThemeProvider';

type Props = {
	href: string;
	hierarchy: string;
	text: string;
};

type Theme = 'developer' | 'cybersec' | string;
type Hierarchy = 'primary' | 'secondary' | string;

const Button = ({ href, hierarchy, text }: Props) => {
	const { theme } = useTheme();

	function decideBtnColor() {
		const themeColors: { [key in Theme]?: string } = {
			developer: 'white',
			cybersec: 'teal',
		};

		const hierarchyColors: { [key in Hierarchy]?: string } = {
			primary: 'gold',
			secondary: 'teal',
		};

		return themeColors[theme] || hierarchyColors[hierarchy] || 'white';
	}

	return (
		<a
			href={href}
			className={`${styles.btn} ${styles[`btn--${decideBtnColor()}`]}`}
		>
			{text}
		</a>
	);
};

export default Button;
