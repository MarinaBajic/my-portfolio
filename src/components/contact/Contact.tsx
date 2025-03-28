import styles from './Contact.module.scss';
import Section from '../section/Section';
import Logo from '../logo/Logo';
import { useTheme } from '../../context/ThemeProvider';

type Theme = 'teacher' | 'designer' | 'developer' | string;
type Color = 'white' | 'gold' | 'teal';

const themeColors: { [key in Theme]?: Color } = {
	designer: 'gold',
	teacher: 'white',
	developer: 'teal',
};

const Contact = () => {
	const { theme } = useTheme();

	return (
		<Section
			id="contact"
			background="contact"
			subheading="Contact me"
			heading="How can I help?"
		>
			<div className={styles.card}>
				<div className={styles.content}>
					<div className={styles.front}>
						<Logo color={themeColors[theme] || 'white'} />
					</div>
					<a
						className={styles.back}
						href="mailto:marinabajic10@gmail.com"
					>
						<Logo color={themeColors[theme] || 'white'} />
						<div className={styles.signature}>
							<span className={styles.name}>Marina Bajić</span>
							<span>Front-end Developer</span>
						</div>
						<span className={styles.email}>
							marinabajic10@gmail.com
						</span>
					</a>
				</div>
			</div>
		</Section>
	);
};

export default Contact;
