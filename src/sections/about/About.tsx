import Title from '../../components/title/Title';
import styles from './About.module.scss';

const About = () => {
	return (
		<section id="about" className={`section`}>
			<Title
				background="About"
				subheading="About me"
				heading="Dedicated Front-end Developer"
			/>
		</section>
	);
};

export default About;
