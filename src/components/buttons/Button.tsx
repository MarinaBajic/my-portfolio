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
			target='_blank'
			className={`${styles.btn} ${styles[`btn--${decideBtnColor()}`]}`}
		>
			<div
				className={`${styles.border} ${styles['border--right']}`}
			></div>
			<div className={`${styles.border} ${styles['border--top']}`}></div>
			<div className={`${styles.border} ${styles['border--left']}`}></div>
			{text}
		</a>
	);
};

export default Button;
