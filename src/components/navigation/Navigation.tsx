import styles from './Navigation.module.scss';

type Link = {
	href: string;
	text: string;
};

const links: Array<Link> = [
	{ href: '#experience', text: 'Experience' },
	{ href: '#projects', text: 'Projects' },
	{ href: '#about', text: 'About' },
	{ href: '#contact', text: 'Contact' },
];

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles['nav__list']}>
				{links.map((link, index) => (
					<li key={index} className={styles['nav__item']}>
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
