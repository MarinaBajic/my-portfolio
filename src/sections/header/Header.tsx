import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';

type Props = {
	logo: any;
	navigation: any;
	socials: any;
};

const Header = (props: Props) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		document.body.classList.toggle('overflow-y-hidden', menuOpen);
	}, [menuOpen]);

	function toggleMenuOpen() {
		setMenuOpen((wasMenuOpen) => !wasMenuOpen);
	}

	return (
		<header className={styles.header}>
			<div className={styles['header__logo']}>{props.logo}</div>
			<div className={styles['header__nav']}>{props.navigation}</div>
			<button
				onClick={toggleMenuOpen}
				className={styles['header__button']}
			>
				{menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
			</button>
			{menuOpen && (
				<div
					className={styles['header__nav-sm']}
					onClick={() => setMenuOpen(false)}
				>
					{props.navigation}
				</div>
			)}
			<div className={styles['header__socials']}>{props.socials}</div>
			{menuOpen && (
				<div
					className={`${styles['header__socials']} ${styles['header__socials--sm']}`}
				>
					{props.socials}
				</div>
			)}
		</header>
	);
};

export default Header;
