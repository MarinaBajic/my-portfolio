import styles from './Background.module.scss';

type Props = {
	text: string;
	style?: string;
};

const Background = ({ text, style }: Props) => {
	return (
		<span className={`${styles.background} ${style ? style : ''}`}>
			{text}
		</span>
	);
};

export default Background;
