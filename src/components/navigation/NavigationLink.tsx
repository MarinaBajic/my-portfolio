import styles from './NavigationLink.module.scss';

type Props = {
	href: string;
	children: string;
};

const NavigationLink = ({ href, children }: Props) => {
	return (
		<li className={styles['nav__item']}>
			<a href={href}>
				{children}
			</a>
		</li>
	);
};

export default NavigationLink;
