import styles from './Title.module.scss'

type Props = {
	background: string
	subheading: string;
	heading: string;
};

const Title = ({ background, subheading, heading }: Props) => {
	return (
		<>
			<span className="background">{background}</span>
			<div className={styles.title}>
				<h2 className="heading heading--tertiary">{subheading}</h2>
				<h3 className="heading heading--secondary">{heading}</h3>
			</div>
		</>
	);
};

export default Title;
