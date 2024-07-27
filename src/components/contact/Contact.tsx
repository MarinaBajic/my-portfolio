import styles from './Contact.module.scss';
import Section from '../section/Section';
import logo from '../../assets/logo-gold.svg';

const Contact = () => {
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
						<img className={styles.logo} src={logo} alt="Logo" />
					</div>
					<a
						className={styles.back}
						href="mailto:marinabajic10@gmail.com"
					>
						<img className={styles.logo} src={logo} alt="Logo" />
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
