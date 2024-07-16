import styles from './Section.module.scss';

type Props = {
	id: string;
	background: string;
	subheading?: string;
	heading?: string;
	style?: string;
	children: any;
};

const Section = (props: Props) => {
	return (
		<section id={props.id} className={`${styles.section} ${props.style}`}>
			<span className="background">{props.background}</span>
			<div className={styles.title}>
				<h2 className="heading heading--tertiary">
					{props.subheading}
				</h2>
				<h3 className="heading heading--secondary">{props.heading}</h3>
			</div>
			{props.children}
		</section>
	);
};

export default Section;
