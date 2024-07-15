import Slider from '../../components/slider/Slider';
import styles from "./Hero.module.scss"

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={`${styles["hero__banner"]} ${styles.banner}`}>
				<span className={styles["banner__subheading"]}>Marina Bajić</span>
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
			{/* <div className="hero__btns">
				<a className="btn btn--primary" href="#work">
					See my work
				</a>
				<a className="btn btn--secondary" href="#about">
					About me
				</a>
			</div> */}
		</div>
	);
};

export default Hero;
