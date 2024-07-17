import styles from './Button.module.scss';

type Props = {
	href: string;
	hierarchy?: string;
	text: string;
};

const Button = ({ href, hierarchy = 'primary', text }: Props) => {
	return (
		<a
			href={href}
			className={`${styles.btn} ${styles[`btn--${hierarchy}`]}`}
		>
			{text}
		</a>
	);
};

export default Button;
