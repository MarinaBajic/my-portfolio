import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import styles from './Header.module.scss';
import { useState } from 'react';

type Props = {
	logo: any;
	navigation: any;
	socials: any;
};

const Header = (props: Props) => {
	const [menuOpen, setMenuOpen] = useState<Boolean>(false);

	function toggleMenuOpen() {
		setMenuOpen((wasMenuOpen) => !wasMenuOpen);
	}

	return (
		<header className={styles.header}>
			{props.logo}
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
					// x-init="$watch('open', value => window.innerWidth <= 1024 && document.body.classList.toggle('overflow-y-hidden', value))"
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
