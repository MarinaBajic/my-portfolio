import styles from './Button.module.scss';
import { useTheme } from '../../context/ThemeProvider';

type Props = {
	hierarchy: string;
	text: string;
	href?: string;
	target?: string;
	onClick?: () => void;
};

type Theme = 'teacher' | 'developer' | string;
type Hierarchy = 'primary' | 'secondary' | string;

const Button = ({ href, hierarchy, text, target = '_self', onClick }: Props) => {
	const ButtonComponent = href ? "a" : "button";
	const { theme } = useTheme();

	function decideBtnColor() {
		const themeColors: { [key in Theme]?: string } = {
			teacher: 'white',
			developer: 'teal',
		};

		const hierarchyColors: { [key in Hierarchy]?: string } = {
			primary: 'gold',
			secondary: 'teal',
		};

		return themeColors[theme] || hierarchyColors[hierarchy] || 'white';
	}

	return (
		<ButtonComponent
			{...(href ? { href, target } : { onClick })}
			className={`${styles.btn} ${styles[`btn--${decideBtnColor()}`]}`}
		>
			<div
				className={`${styles.border} ${styles['border--right']}`}
			></div>
			<div className={`${styles.border} ${styles['border--top']}`}></div>
			<div className={`${styles.border} ${styles['border--left']}`}></div>
			{text}
		</ButtonComponent>
	);
};

export default Button;
