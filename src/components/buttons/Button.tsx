import styles from './Button.module.scss';

type Props = {
	href: string;
	hierarchy?: string;
	children: string;
};

const Button = ({ href, hierarchy="primary", children }: Props) => {
	return (
		<a href={href} className={`${styles.btn} ${styles[`btn--${hierarchy}`]}`}>
			{children}
		</a>
	);
};

export default Button;
