import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

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
	speed: 2000
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
	speed: 2000
});

const workSlider = new Swiper('.js-work-slider', {
	modules: [Navigation, Pagination],
	direction: 'horizontal',
	centeredSlides: true,
	pagination: {
		el: '.work__pagination',
		type: 'fraction'
	},
	navigation: {
		nextEl: '.work__nav--next',
		prevEl: '.work__nav--prev',
	},
});
