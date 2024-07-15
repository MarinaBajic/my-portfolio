import Button from '../../components/buttons/Button';
import Slider from '../../components/slider/Slider';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.banner}>
				<span className={styles['banner__subheading']}>
					Marina Bajić
				</span>
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
						<span className={styles['banner__text']}>
							I turn designs into pixel-perfect and responsive web
							sites.
						</span>,
						<span className={styles['banner__text']}>
							I design modern and elegant web sites for people
							with taste.
						</span>,
					]}
					reversed={true}
				/>
			</div>
			<div className={styles['hero__btn']}>
				<Button href="#projects">My work</Button>
			</div>
		</section>
	);
};

export default Hero;
