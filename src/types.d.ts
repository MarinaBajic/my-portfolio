declare namespace JSX {
	interface IntrinsicElements {
		'swiper-container': React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
		> & {
			loop?: string;
			speed?: string;
			direction: string;
		};
		'swiper-slide': React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLElement>,
			HTMLElement
		>;
	}
}
