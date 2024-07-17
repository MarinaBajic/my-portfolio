import styles from './Header.module.scss';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import Socials from '../socials/Socials';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		document.body.classList.toggle('overflow-y-hidden', menuOpen);
	}, [menuOpen]);

	function toggleMenuOpen() {
		setMenuOpen((wasMenuOpen) => !wasMenuOpen);
	}

	return (
		<header className={styles.header}>
			<div className={styles['header__logo']}>
				<Logo />
			</div>
			<div className={styles['header__nav']}>
				<Navigation />
			</div>
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
					<Navigation />
				</div>
			)}
			<div className={styles['header__socials']}>
				<Socials />
			</div>
			{menuOpen && (
				<div
					className={`${styles['header__socials']} ${styles['header__socials--sm']}`}
				>
					<Socials />
				</div>
			)}
		</header>
	);
};

export default Header;
