import styles from './Title.module.scss';

type Props = {
	subtitle: string;
	title: string;
	color?: string;
};

const Title = ({ subtitle, title, color = 'white' }: Props) => {
	return (
		<div
			className={`${styles.title} ${color == 'gold' ? styles.gold : ''}`}
		>
			<span className="title title--tertiary">{subtitle}</span>
			<span className="title title--primary">{title}</span>
		</div>
	);
};

export default Title;
