import styles from './Title.module.scss'

type Props = {
	subheading: string;
	heading: string;
};

const Title = ({ subheading, heading }: Props) => {
	return (
		<div className={styles.title}>
			<h2 className="heading heading--tertiary">{subheading}</h2>
			<h3 className="heading heading--secondary">{heading}</h3>
		</div>
	);
};

export default Title;
