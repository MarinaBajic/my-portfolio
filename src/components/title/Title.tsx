import styles from './Title.module.scss';

type Props = {
	subtitle: string;
	title: string;
	style?: string;
};

const Title = ({ subtitle, title, style }: Props) => {
	return (
		<div className={`${styles.content} ${style ? style : ''}`}>
			<span className={styles.subtitle}>{subtitle}</span>
			<span className={styles.title}>{title}</span>
		</div>
	);
};

export default Title;
