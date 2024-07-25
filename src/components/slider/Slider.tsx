import styles from './Slider.module.scss';
import { register } from 'swiper/element/bundle';

register();

type Props = {
	slides: any[];
	reversed?: boolean;
};

const Slider = ({ slides, reversed = false }: Props) => {
	return (
		<swiper-container
			className={styles.slider}
			direction="vertical"
			space-between="80"
			loop="true"
			autoplay-delay="2500"
			autoplay-reverse-direction={reversed}
			speed="2000"
		>
			{slides.map((slide, index) => (
				<swiper-slide key={index}>{slide}</swiper-slide>
			))}
		</swiper-container>
	);
};

export default Slider;
