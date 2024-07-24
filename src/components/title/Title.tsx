import styles from './Title.module.scss';

type Props = {
	subtitle: string;
	title: string;
};

const Title = ({ subtitle, title }: Props) => {
	return (
		<div className={`${styles.container}`}>
			<span className={styles.subtitle}>{subtitle}</span>
			<span className={styles.title}>{title}</span>
		</div>
	);
};

export default Title;
