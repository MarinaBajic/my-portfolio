import styles from './About.module.scss';
import Section from '../section/Section';
import Title from '../title/Title';

const About = () => {
	return (
		<Section
			id="about"
			background="About"
			subheading="About me"
			heading="Dedicated Front-end Developer"
		>
			<div className={styles.content}>
				<Title
					subtitle="Hello, my name is"
					title="Marina Bajić"
					color="gold"
				/>
			</div>
		</Section>
	);
};

export default About;
