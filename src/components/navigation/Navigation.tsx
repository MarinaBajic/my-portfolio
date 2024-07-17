import styles from './Navigation.module.scss';

type TLink = {
	href: string;
	text: string;
};

const links: Array<TLink> = [
	{ href: '#experience', text: 'Experience' },
	{ href: '#projects', text: 'Projects' },
	{ href: '#about', text: 'About' },
	{ href: '#contact', text: 'Contact' },
];

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.menu}>
				{links.map((link, index) => (
					<Link key={index} link={link} />
				))}
			</ul>
		</nav>
	);
};

const Link = ({ link }: { link: TLink }) => {
	return (
		<li className={styles.link}>
			<a href={link.href}>{link.text}</a>
		</li>
	);
};

export default Navigation;
