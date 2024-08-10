import styles from './Hero.module.scss';
import Button from '../buttons/Button';
import Slider from '../slider/Slider';
import Background from '../background/Background';

const Hero = () => {
	return (
		<section id="hero" className={styles.hero}>
			<div className={styles.banner}>
				<Background text="marina" style={styles.background} />
				<Slider
					slides={[
						<h1 className={styles.heading}>Front-end Developer</h1>,
						<span className={styles.heading}>UI/UX Designer</span>,
					]}
				/>
				<Background text="bajic" style={styles.background} />
			</div>
			<div className={styles.btn}>
				<Button
					href="#projects"
					hierarchy="primary"
					text="My work"
					target="_self"
				/>
				<Button
					href="#contact"
					hierarchy="secondary"
					text="Get in touch"
					target="_self"
				/>
			</div>
		</section>
	);
};

export default Hero;
