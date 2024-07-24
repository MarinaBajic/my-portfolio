import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.copyright}>
				<span>Made with love by Marina Bajić</span>
				<span>Copyright 2023</span>
			</div>
		</footer>
	);
};

export default Footer;
