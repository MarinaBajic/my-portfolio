import styles from './About.module.scss';
import Section from '../section/Section';
import Title from '../title/Title';
import profilePicture from '../../assets/marina.jpg';
import curvedText from '../../assets/curved-text.svg';
import { useTheme } from '../../context/ThemeProvider';

const About = () => {
	const { theme } = useTheme();

	return (
		<Section
			id="about"
			background="about"
			heading="About me"
			style={styles.section}
		>
			<div className={styles.about}>
				<div className={styles.content}>
					<Title subtitle="Hello, my name is" title="Marina Bajić" />
					<div className={styles.text}>
						<p>
							Creating <b>high-quality</b> code and design is what
							I do.
						</p>
						<p>
							<b>Teaching Associate</b> and <b>Master's</b> student
							at Faculty of Sciences, University of Novi Sad. 
							Graduate in <b>Informatics – Information Technologies</b>.
						</p>
						<p>
							Likes going to <b>hackathons</b>, designing and
							developing web applications, reading, sewing, and
							doing puzzles.
						</p>
					</div>
				</div>
				<div className={styles.profile}>
					<div className={styles.image}>
						<img
							src={profilePicture}
							alt="Marina Bajić"
							loading="lazy"
						/>
					</div>
					{theme == 'designer' && (
						<img
							className={styles.background}
							src={curvedText}
							alt="Dedicated Front-end Developer"
							loading="lazy"
						/>
					)}
				</div>
			</div>
		</Section>
	);
};

export default About;
