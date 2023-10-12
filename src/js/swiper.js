import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const heroSwiper = new Swiper('.js-hero-slider', {
	modules: [Autoplay],
	direction: 'horizontal',
	loop: true,
	centeredSlides: true,
	allowTouchMove: false,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	speed: 1200,
});

const heroSubswiper = new Swiper('.js-hero-subslider', {
	modules: [Autoplay],
	direction: 'horizontal',
	loop: true,
	centeredSlides: true,
	allowTouchMove: false,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		reverseDirection: true,
	},
	speed: 1200,
});
