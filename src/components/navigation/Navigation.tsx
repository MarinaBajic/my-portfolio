import { useEffect } from 'react';
import styles from './Navigation.module.scss';
import navigationData from './navigationData.json';

type TLink = {
	href: string;
	text: string;
};

const Navigation = () => {
	const links: Array<TLink> = navigationData;

	useEffect(() => {
		const sections = document.querySelectorAll('section');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const id = entry.target.getAttribute('id');
					const link = document.querySelector(
						`nav ul li a[href="#${id}"]`,
					);

					if (entry.isIntersecting) {
						link?.classList.add(styles.active);
					} else {
						link?.classList.remove(styles.active);
					}
				});
			},
			{ threshold: 0.2 },
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

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
