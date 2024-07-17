import styles from './Hero.module.scss';
import Button from '../buttons/Button';
import Slider from '../slider/Slider';

const Hero = () => {
	return (
		<section id="hero" className={styles.hero}>
			<div className={styles.banner}>
				<span className={styles.subheading}>Marina Bajić</span>
				<Slider
					slides={[
						<h1 className="heading heading--primary">
							Front-end
							<br />
							Developer
						</h1>,
						<span className="heading heading--primary">
							Web
							<br />
							Designer
						</span>,
					]}
				/>
				<Slider
					slides={[
						<span className={styles.headline}>
							I turn designs into pixel-perfect and responsive web
							sites.
						</span>,
						<span className={styles.headline}>
							I design modern and elegant web sites for people
							with taste.
						</span>,
					]}
					reversed={true}
				/>
			</div>
			<div className={styles.btn}>
				<Button href="#projects" text="My work" />
				<Button href="#contact" hierarchy='secondary' text="Get in touch" />
			</div>
		</section>
	);
};

export default Hero;
