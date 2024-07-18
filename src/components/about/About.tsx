import styles from './About.module.scss';
import Section from '../section/Section';
import Title from '../title/Title';
import profilePicture from '../../assets/marina.png';
import curvedText from '../../assets/curved-text.svg';

const About = () => {
	return (
		<Section
			id="about"
			background="About"
			subheading="About me"
			heading="Dedicated Front-end Developer"
		>
			<div className={styles.about}>
				<div className={styles.content}>
					<Title
						subtitle="Hello, my name is"
						title="Marina Bajić"
						color="gold"
					/>
					<div className={styles.text}>
						<p>
							Creating high-quality code and design is what I do.
						</p>
						<p>
							Recent graduate in Informatics – Information
							Technologies from the Faculty of Sciences,
							University of Novi Sad, Serbia, volunteering in a
							non-governmental organization.
						</p>
						<p>
							Loves going to hackathons, designing and developing
							web applications, reading, sewing, and solving
							puzzles.
						</p>
					</div>
				</div>
				<div className={styles.profile}>
					<img
						className={styles.image}
						src={profilePicture}
						alt="Marina Bajić"
						loading="lazy"
					/>
					<img
						className={styles.text}
						src={curvedText}
						alt="Dedicated Front-end Developer"
						loading="lazy"
					/>
				</div>
			</div>
		</Section>
	);
};

export default About;
