import styles from './Hero.module.scss';
import Button from '../buttons/Button';
import Slider from '../slider/Slider';
import Background from '../background/Background';
import { useTheme } from '../../context/ThemeProvider';

const Hero = () => {
	const { theme } = useTheme();

	return (
		<section id="hero" className={styles.hero}>
			<div className={styles.banner}>
				<Background
					text="marina"
					style={`${styles.background} ${
						styles[`background--${theme}`]
					}`}
				/>
				<Slider
					slides={[
						<h1
							className={`${styles.heading} ${
								styles[`heading--${theme}`]
							}`}
						>
							Front-end Developer
						</h1>,
						<span
							className={`${styles.heading} ${
								styles[`heading--${theme}`]
							}`}
						>
							UI/UX Designer
						</span>,
					]}
				/>
				<Background
					text="bajic"
					style={`${styles.background} ${
						styles[`background--${theme}`]
					}`}
				/>
			</div>
			<div className={styles.btn}>
				<Button href="#projects" color="secondary" text="My work" />
				<Button href="#contact" color="primary" text="Get in touch" />
			</div>
		</section>
	);
};

export default Hero;
