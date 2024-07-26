import { useTheme } from '../../context/ThemeProvider';
import styles from './Background.module.scss';

type Props = {
	text: string;
	style?: string;
};

const Background = ({ text, style }: Props) => {
	const { theme } = useTheme();

	return (
		<span
			className={`${styles.background} ${style ? style : ''} ${
				styles[`background--${theme}`]
			}`}
		>
			{text}
		</span>
	);
};

export default Background;
