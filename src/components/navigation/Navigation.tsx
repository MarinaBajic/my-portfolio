import styles from './Navigation.module.scss';
import navigationData from './navigationData.json';

type TLink = {
	href: string;
	text: string;
};

const Navigation = () => {
	const links: Array<TLink> = navigationData;

	return (
		<nav>
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
			<a href={link.href}>
				<span className={styles.slash}>/ </span>
				{link.text}
			</a>
		</li>
	);
};

export default Navigation;
