import styles from './Button.module.scss';

type Props = {
	href: string;
	color?: string;
	text: string;
};

const Button = ({ href, color = 'white', text }: Props) => {
	return (
		<a href={href} className={`${styles.btn} ${styles[`btn--${color}`]}`}>
			{text}
		</a>
	);
};

export default Button;
